package main

import (
	"log"
	"net/http"
	"os"

	"bookbox/backend/db"
	"bookbox/backend/graph"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/extension"
	"github.com/99designs/gqlgen/graphql/handler/lru"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/rs/cors"
	"github.com/vektah/gqlparser/v2/ast"
)

const defaultPort = "8080"

func main() {
	// DB接続 & マイグレーション
	db.Init()
	if err := db.Migrate(); err != nil {
		log.Fatalf("Migration failed: %v", err)
	}
	log.Printf("Migrated successfully")

	// GraphQL ハンドラー設定
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// ResolverにDBを渡す
	dbConn := db.GetDB()
	resolver := &graph.Resolver{DB: dbConn}
	srv := handler.New(graph.NewExecutableSchema(graph.Config{Resolvers: resolver}))

	srv.AddTransport(transport.Options{})
	srv.AddTransport(transport.GET{})
	srv.AddTransport(transport.POST{})

	srv.SetQueryCache(lru.New[*ast.QueryDocument](1000))

	srv.Use(extension.Introspection{})
	srv.Use(extension.AutomaticPersistedQuery{
		Cache: lru.New[string](100),
	})

	// TODO: 開発中は全て許可（本番は制限）
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3001"}, // ← Next.jsのURL
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
	})

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", c.Handler(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
