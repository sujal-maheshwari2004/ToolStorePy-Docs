# ToolStorePy Docs

Documentation site for **ToolStorePy** built with [Docusaurus](https://docusaurus.io/).

ToolStorePy is an automatic MCP server builder with semantic tool retrieval, security scanning, and custom tool index authoring. This repository contains the docs website for that project.

## What this repo contains

- product documentation for ToolStorePy
- quickstart and installation guides
- architecture and security docs
- custom index authoring docs
- CLI and Python import usage examples

## Local development

Install dependencies:

```bash
npm install
```

Start the local docs server:

```bash
npm run start
```

The site will be available locally with live reload while you edit docs and UI files.

## Build

Create a production build:

```bash
npm run build
```

Serve the built site locally:

```bash
npm run serve
```

## Useful scripts

```bash
npm run start
npm run build
npm run serve
npm run clear
npm run typecheck
```

## Project structure

```text
.
|-- docs/          # MDX documentation pages
|-- src/           # homepage and theme customization
|-- static/        # logos, social card, favicon, static assets
|-- docusaurus.config.ts
|-- sidebars.ts
`-- package.json
```

## Main docs sections

- Introduction
- Installation
- Quickstart
- Core Concepts
- Pipeline Architecture
- Creating Custom Tool Indexes
- Security Model
- Evaluation Results
- CLI Reference
- Extending ToolStorePy

## Related project

Main ToolStorePy repository:

```text
https://github.com/sujal-maheshwari2004/ToolStore
```
