#!/bin/bash
# Script to create a new repository with clean history from current state

set -e

REPO_NAME="programming-languages"
CLEAN_REPO_DIR="${REPO_NAME}-clean"
CURRENT_DIR=$(pwd)

echo "🧹 Creating clean repository..."

# Create temporary directory for clean repo
cd /tmp
rm -rf "$CLEAN_REPO_DIR"
mkdir "$CLEAN_REPO_DIR"
cd "$CLEAN_REPO_DIR"

# Initialize new git repository
git init

# Copy all files from current repo (excluding .git)
echo "📦 Copying files..."
rsync -av --exclude='.git' --exclude='node_modules' --exclude='build' --exclude='.docusaurus' --exclude='__pycache__' "$CURRENT_DIR/" .

# Create initial commit
echo "📝 Creating initial commit..."
git add .
git commit -m "Initial release v1.2.0

- Comprehensive comparison of 56 programming languages
- 22 topic areas covering type systems, control flow, OOP, pattern matching, concurrency, metaprogramming, and more
- Bilingual documentation (German and English)
- Complete feature matrix and language overview"

# Create version tag
git tag -a v1.2.0 -m "Release version 1.2.0"

echo ""
echo "✅ Clean repository created in: /tmp/$CLEAN_REPO_DIR"
echo ""
echo "Next steps:"
echo "1. Review the repository: cd /tmp/$CLEAN_REPO_DIR"
echo "2. If satisfied, push to new remote:"
echo "   git remote add origin <your-new-repo-url>"
echo "   git push -u origin main"
echo "   git push origin v1.2.0"
echo ""
echo "⚠️  Note: This creates a completely new repository with no connection to the old one."
