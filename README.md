# tanstack-start-example

## Prerequisites

- [Node.js](https://nodejs.org/) >= v24.0.0 [(`nvm install 24`)](https://nvm.sh)
- [pnpm](https://pnpm.io/) v10.18.3 [(`npm install --global corepack@0.34.0 && corepack enable`)](https://github.com/nodejs/corepack)

## Usage

```sh
# Install dependencies
pnpm install --frozen-lockfile

# Development server
node --run dev

# Lint
node --run lint:typescript
node --run lint:oxlint
node --run lint:prettier

# Build
node --run build

# Start production server
node --run start
```
