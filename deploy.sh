#!/bin/bash

# RM Weekly Report - Gitee Deployment Script
echo "🚀 Starting automated deployment to Gitee..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📦 Initializing git repository...${NC}"
    git init
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
fi

# Update vite.config.js for Gitee Pages
echo -e "${YELLOW}⚙️  Updating vite config for Gitee Pages...${NC}"
cat > vite.config.js << 'VITE_CONFIG_EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
VITE_CONFIG_EOF

# Build the project
echo -e "${YELLOW}🔨 Building project for production...${NC}"
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed! Please check for errors.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"

# Git operations
echo -e "${YELLOW}📝 Preparing git commit...${NC}"

# Add all files
git add .

# Commit with timestamp
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Deploy RM Weekly Report Demo - $TIMESTAMP"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo -e "${YELLOW}🔗 Adding Gitee remote...${NC}"
    git remote add origin https://gitee.com/maxuxer/demo.git
fi

# Push to Gitee
echo -e "${YELLOW}🚀 Pushing to Gitee...${NC}"
git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
    echo -e "${GREEN}🌐 Your demo will be available at: https://maxuxer.gitee.io/demo/${NC}"
    echo -e "${YELLOW}📋 Next steps:${NC}"
    echo -e "   1. Go to https://gitee.com/maxuxer/demo"
    echo -e "   2. Click '服务' → 'Gitee Pages'"
    echo -e "   3. Set Source: main, Directory: /dist"
    echo -e "   4. Click '启动'"
    echo -e "   5. Wait 1-2 minutes for deployment"
else
    echo -e "${RED}❌ Push failed! Please check your git credentials.${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Deployment script completed!${NC}"
