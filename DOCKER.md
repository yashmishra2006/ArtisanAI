# ArtisanAI Website - Docker Deployment

Flask-based web application for ArtisanAI marketplace with separate Shop and Creator portals.

## Quick Start with Docker

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at `http://localhost:5000`

### Option 2: Using Docker directly

```bash
# Build the image
docker build -t artisanai-web .

# Run the container
docker run -d \
  --name artisanai-web \
  -p 5000:5000 \
  --restart unless-stopped \
  artisanai-web

# View logs
docker logs -f artisanai-web

# Stop and remove the container
docker stop artisanai-web
docker rm artisanai-web
```

## Application Structure

```
/
├── /shop/              - Buyer-facing pages
│   ├── /               - Landing page
│   ├── /marketplace    - Browse products
│   ├── /product/<id>   - Product details
│   └── /become-a-seller - Auth redirect
│
├── /creator/           - Seller portal
│   ├── /dashboard      - Overview
│   ├── /collections    - Product catalog
│   ├── /ai-photo-studio - AI photography
│   ├── /digital-provenance - Certificates
│   ├── /finance-hub    - Fundraising
│   ├── /training       - Skill development
│   ├── /community      - Artisan network
│   └── /settings       - Account settings
│
└── /auth/              - Authentication
    └── /               - Login/Signup
```

## Development

### Local Development

```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

### Docker Development with Live Reload

Uncomment the volumes section in `docker-compose.yml` to enable live reloading:

```yaml
volumes:
  - ./static:/app/static
  - ./templates:/app/templates
```

## Environment Variables

- `FLASK_APP=app.py` - Flask application entry point
- `FLASK_ENV=production` - Environment mode (use `development` for debugging)

## Health Check

The container includes a health check that pings the root endpoint every 30 seconds. You can check the health status:

```bash
docker ps  # Look at the STATUS column
```

## Ports

- **5000** - Main application port

## Architecture

- **Framework**: Flask 3.0+
- **Template Engine**: Jinja2
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Material Symbols Outlined
- **Fonts**: Manrope, Newsreader (Google Fonts)

## Production Considerations

For production deployment, consider:

1. **Use a production WSGI server** (Gunicorn/uWSGI):
   ```dockerfile
   CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "4", "app:app"]
   ```

2. **Add environment-specific configuration**
3. **Set up HTTPS with reverse proxy** (nginx/Caddy)
4. **Configure proper logging**
5. **Add database connections** (if needed)
6. **Implement session management**

## Troubleshooting

### Container won't start
```bash
docker logs artisanai-web
```

### Port already in use
```bash
# Change the port mapping in docker-compose.yml or docker run command
# Example: -p 8080:5000
```

### Rebuild after changes
```bash
docker-compose up -d --build
```

## License

© 2026 ArtisanAI
