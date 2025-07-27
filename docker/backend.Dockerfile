FROM golang:1.24.5 AS builder
WORKDIR /app
COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend/ ./
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o server

FROM debian:bullseye-slim
WORKDIR /app

RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/
COPY backend/wait-for-postgres.sh /app/wait-for-postgres.sh
RUN chmod +x /app/wait-for-postgres.sh

COPY --from=builder /app/server /app/server

EXPOSE 8080
# PostgreSQL を待ってからサーバー起動
CMD ["/app/wait-for-postgres.sh", "db", "5432", "/app/server"]