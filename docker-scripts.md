# Docker Scripts for Trombi Application

## Quick Start Commands

### Production Environment
```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Development Environment
```bash
# Start with development profile (includes hot reload)
docker-compose --profile dev up -d

# View development logs
docker-compose logs -f app-dev

# Stop development environment
docker-compose --profile dev down
```

## Individual Service Management

### Database Only
```bash
# Start only PostgreSQL
docker-compose up -d postgres

# Connect to PostgreSQL
docker-compose exec postgres psql -U trombi_user -d trombi
```

### Application Only
```bash
# Start only the app (requires database to be running)
docker-compose up -d app
```

## Useful Commands

### Database Operations
```bash
# Import SQL file into database
docker-compose exec postgres psql -U trombi_user -d trombi -f /docker-entrypoint-initdb.d/init.sql

# Backup database
docker-compose exec postgres pg_dump -U trombi_user trombi > backup.sql

# Restore database
docker-compose exec -T postgres psql -U trombi_user -d trombi < backup.sql
```

### Application Management
```bash
# Rebuild application image
docker-compose build app

# View application logs
docker-compose logs -f app

# Execute commands in running container
docker-compose exec app npm run dev

# Access container shell
docker-compose exec app sh
```

### Cleanup
```bash
# Remove all containers and networks
docker-compose down

# Remove all containers, networks, and volumes
docker-compose down -v

# Remove all images
docker-compose down --rmi all
```

## Environment Variables

Make sure to create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

## Accessing the Application

- **Production**: http://localhost:3000
- **Development**: http://localhost:3001
- **Database**: localhost:5432

## Troubleshooting

### Database Connection Issues
```bash
# Check if PostgreSQL is running
docker-compose ps postgres

# Check PostgreSQL logs
docker-compose logs postgres

# Test database connection
docker-compose exec postgres psql -U trombi_user -d trombi -c "SELECT 1;"
```

### Application Issues
```bash
# Check application logs
docker-compose logs app

# Restart application
docker-compose restart app

# Rebuild and restart
docker-compose up -d --build app
```