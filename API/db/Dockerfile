# Dockerfile untuk membangun Docker image database

# Menggunakan Docker image dasar untuk PostgreSQL
FROM postgres:latest

# Menyalin migrasi ke dalam container
COPY ../Data/Migrations /docker-entrypoint-initdb.d/
