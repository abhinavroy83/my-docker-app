# Next.js Docker Application

This is a Next.js application configured to run in Docker containers.

## Getting Started

### Prerequisites

- Docker Desktop installed
- Node.js (for local development)

### Building and Running

1. **Build the Docker image:**
   \`\`\`bash
   docker build -t nextjs-app .
   \`\`\`

2. **Run the container:**
   \`\`\`bash
   docker run -p 3000:3000 nextjs-app
   \`\`\`

3. **Using Docker Compose:**
   \`\`\`bash
   docker-compose up --build
   \`\`\`

### Development vs Production

**Development:**
\`\`\`bash

# Run locally for development

npm run dev
\`\`\`

**Production:**
\`\`\`bash

# Build and run in Docker

docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
\`\`\`

### Docker Commands Reference

\`\`\`bash

# Build image

docker build -t nextjs-app .

# Run container

docker run -p 3000:3000 nextjs-app

# Run in background

docker run -d -p 3000:3000 nextjs-app

# View running containers

docker ps

# Stop container

docker stop <container-id>

# View logs

docker logs <container-id>

# Remove container

docker rm <container-id>

# Remove image

docker rmi nextjs-app
\`\`\`

### Multi-stage Build Benefits

1. **Smaller final image** - Only production dependencies
2. **Security** - No build tools in production
3. **Efficiency** - Cached layers for faster rebuilds
4. **Clean separation** - Build vs runtime environments

### Best Practices Implemented

- ✅ Multi-stage build for optimization
- ✅ Non-root user for security
- ✅ .dockerignore for smaller context
- ✅ Standalone output for minimal runtime
- ✅ Proper layer caching
- ✅ Environment variable support
