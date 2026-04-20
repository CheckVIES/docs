# CheckVIES Documentation

This repository contains the documentation for CheckVIES, a service for validating VAT numbers via VIES.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 24 or higher)
- [Yarn](https://yarnpkg.com/) (recommended) or npm

## Installation

```bash
# Set up node.js using nvm
nvm install

# Set up yarn using corepack
corepack install
corepack enable

# Install dependencies
yarn install
```

## Local Development

### Generate API Documentation

Before running the site, you need to generate the API documentation from the OpenAPI spec:

```bash
yarn docusaurus gen-api-docs checkvies
```

### Start Development Server

```bash
yarn start
```

By default, the site will be available at `http://localhost:3000`.

### Manual Deployment

```bash
yarn deploy
```

## Project Structure

- `/docs`: Markdown files for documentation.
- `/docs/api`: Generated API documentation (do not edit manually).
- `/openapi`: OpenAPI specification file (`spec.yaml`).
- `/src`: React components and pages.
- `/static`: Static assets like images and CSS.
- `docusaurus.config.ts`: Main configuration file.
- `sidebars.ts`: Sidebar configuration.
