# Contributing to Next.js Docker GitHub App

## Development Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/abhinavroy83/nextjs-docker-app.git
   cd nextjs-docker-app
   \`\`\`

2. **Run setup script:**
   \`\`\`bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   \`\`\`

3. **Start development:**
   \`\`\`bash
   # Local development
   npm run dev
   
   # Docker development
   npm run docker:dev
   \`\`\`

## Git Workflow

### Branch Naming
- \`feature/description\` - New features
- \`fix/description\` - Bug fixes
- \`docs/description\` - Documentation updates
- \`refactor/description\` - Code refactoring

### Commit Messages
Follow conventional commits:
- \`feat: add new feature\`
- \`fix: resolve bug\`
- \`docs: update documentation\`
- \`style: format code\`
- \`refactor: restructure code\`
- \`test: add tests\`
- \`chore: update dependencies\`

### Pull Request Process

1. Create a feature branch from \`main\`
2. Make your changes
3. Run tests: \`npm test\`
4. Run linting: \`npm run lint\`
5. Commit with conventional commit messages
6. Push to your fork
7. Create a Pull Request

## Docker Commands

\`\`\`bash
# Development
npm run docker:dev

# Production
npm run docker:prod

# Build only
npm run docker:build

# Manual commands
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
\`\`\`

## CI/CD Pipeline

The project uses GitHub Actions for:
- ✅ Automated testing
- 🐳 Docker image building
- 📦 Package publishing to GitHub Container Registry
- 🚀 Deployment to production

## Environment Variables

Copy \`.env.example\` to \`.env.local\` and update values:
- Database credentials
- API keys
- Service URLs

## Testing

\`\`\`bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
\`\`\`

## Code Quality

- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- Lint-staged for pre-commit checks
\`\`\`
