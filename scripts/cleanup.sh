#!/bin/bash

# Script to clean up Nuxt 3 monorepo
# Deletes .nuxt, .output, and node_modules folders recursively
# Then runs pnpm install at the root

# Colors for better readability
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the root directory of the project
ROOT_DIR=$(pwd)

echo -e "${BLUE}=== Nuxt 3 Monorepo Cleanup ===${NC}"
echo -e "${BLUE}Starting cleanup process...${NC}"

# Function to delete folders
delete_folders() {
  local dir=$1
  local folder=$2
  
  if [ -d "$dir/$folder" ]; then
    echo -e "${GREEN}Deleting $dir/$folder${NC}"
    rm -rf "$dir/$folder"
  fi
}

# Process apps directory
echo -e "${BLUE}Processing apps directory...${NC}"
if [ -d "$ROOT_DIR/apps" ]; then
  find "$ROOT_DIR/apps" -type d -name "apps" -o -name "packages" -o -mindepth 1 -maxdepth 1 | while read dir; do
    echo -e "${GREEN}Cleaning $dir${NC}"
    delete_folders "$dir" ".nuxt"
    delete_folders "$dir" ".output"
    delete_folders "$dir" "node_modules"
  done
else
  echo -e "${RED}Apps directory not found${NC}"
fi

# Process packages directory
echo -e "${BLUE}Processing packages directory...${NC}"
if [ -d "$ROOT_DIR/packages" ]; then
  find "$ROOT_DIR/packages" -mindepth 1 -maxdepth 1 -type d | while read dir; do
    echo -e "${GREEN}Cleaning $dir${NC}"
    delete_folders "$dir" ".nuxt"
    delete_folders "$dir" ".output"
    delete_folders "$dir" "node_modules"
  done
else
  echo -e "${RED}Packages directory not found${NC}"
fi

# Delete root node_modules
echo -e "${BLUE}Cleaning root directory...${NC}"
delete_folders "$ROOT_DIR" "node_modules"

# Run pnpm install
echo -e "${BLUE}Running pnpm install...${NC}"
cd "$ROOT_DIR" && pnpm install

echo -e "${GREEN}Cleanup completed!${NC}"