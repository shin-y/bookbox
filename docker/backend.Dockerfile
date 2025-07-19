FROM golang:1.24.5 AS builder
WORKDIR /app
COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend/ ./
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o server

FROM debian:bullseye-slim
WORKDIR /app
COPY --from=builder /app/server /app/server

EXPOSE 8080
CMD ["/app/server"]