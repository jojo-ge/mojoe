#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if pnpm is installed
if ! command_exists pnpm; then
    echo "pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

# Get project name from argument or use default
PROJECT_NAME=${1:-"my-nuxt-app"}

# Navigate to the code directory
cd "$(dirname "$(dirname "$0")")" || exit

# Navigate to repo directory
cd ./apps || exit

# Create Nuxt project with pnpm selected by default
echo "Creating new Nuxt project: $PROJECT_NAME..."
pnpm dlx nuxi init "$PROJECT_NAME" --gitInit --force --package-manager pnpm

# Navigate to project directory
cd "$PROJECT_NAME" || exit

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Install Tailwind v4 and its Vite plugin
echo "Installing Tailwind v4..."
pnpm add tailwindcss @tailwindcss/vite

# Create assets/css directory if it doesn't exist
mkdir -p assets/css

# Create main.css with Tailwind import and theme configuration
echo "Creating Tailwind CSS file..."
cat > assets/css/main.css << 'EOL'
@import "tailwindcss";

@import url("https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Lobster&display=swap");
@import "tailwindcss";

:root {
  --color-primary-100: #f2eeff;
  --color-primary-200: #e2d6ff;
  --color-primary-300: #c4b0f4;
  --color-primary-400: #9c82dc;
  --color-primary-500: #7353ba;
  --color-primary-600: #5c42a0;
  --color-primary-700: #483386;
  --color-primary-800: #35256d;
  --color-primary-900: #231954;

  --color-secondary-100: #fef0ff;
  --color-secondary-200: #fde2ff;
  --color-secondary-300: #fcc4ff;
  --color-secondary-400: #fbb5ff;
  --color-secondary-500: #faa6ff;
  --color-secondary-600: #e182e6;
  --color-secondary-700: #c561cc;
  --color-secondary-800: #a943b3;
  --color-secondary-900: #8c2999;

  --font-body: "Afacad Flux", serif;
  --font-display: "Lobster", serif;

  font-family: var(--font-body);
  background: #e7e7e7;
  color: var(--color-grey-700);
}

EOL

# Create nuxt.config.ts
echo "Configuring Nuxt..."
cat > nuxt.config.ts << EOL
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  extends: ["@mojoe/ui"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
EOL

# Update package.json
echo "Updating package.json..."
cat > package.json << EOL
{
  "name": "@mojoe/$PROJECT_NAME",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "@mojoe/ui": "workspace:^",
    "@tailwindcss/vite": "^4.0.6",
    "nuxt": "^3.15.4",
    "tailwindcss": "^4.0.6",
    "vue": "latest",
    "vue-router": "latest"
  },
  "devDependencies": {
    "@mojoe/ui": "workspace:^"
  }
}
EOL

# Overwrite the default app.vue
echo "Creating app.vue..."
cat > app.vue << 'EOL'
<template>
  <div>
    <h1 class="text-primary text-4xl text-center my-32">New App? Nice ONE!</h1>
  </div>
</template>
EOL

echo "✨ Setup complete! Starting development server..."

pnpm install
# Start the development server
pnpm dev