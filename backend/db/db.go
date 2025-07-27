package db

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var dbInstance *gorm.DB

func Init() {
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
	)

	var db *gorm.DB
	var err error
	for i := 0; i < 10; i++ {
		db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err == nil {
			dbInstance = db
			log.Printf("Database connection successful")
			return
		}
		log.Printf("Database connection failed. Attempting to reconnect… (%d/10): %v", i+1, err)
		time.Sleep(3 * time.Second)
	}

	log.Fatalf("Database connection failed: %v", err)
}

func GetDB() *gorm.DB {
	if dbInstance == nil {
		log.Fatal("database not initialized (did you forget to call db.Init()?)")
	}
	return dbInstance
}
