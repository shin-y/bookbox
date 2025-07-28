#!/bin/sh

set -e

host="$1"
port="$2"
shift 2  # $@ に渡すコマンドがこのあと続く

echo "Waiting for PostgreSQL at $host:$port..."

until pg_isready -h "$host" -p "$port"; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

echo "Postgres is up - executing command"
exec "$@"