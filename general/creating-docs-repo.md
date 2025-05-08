# Creating a new documentation github-page

This documentation outlines the main steps that need to be followed to set up a project's documentation github-page such as [the current page](afrigen-d.github.io/guidelines).

::: warning
Ensure that the [VitePress' prerequisites](https://vitepress.dev/guide/getting-started#prerequisites) are satisfied.
:::

## Creating a [VitePress](https://vitepress.dev/) project

Create the project directory

> `mkdir guidelines`

Enter the directory

> `cd guidelines`

Initialise vitepress

> `npx vitepress init`

This runs the vitepress generator, which will prompt for input

```
Site title:
Guidelines

Site description:
General guidelines

Theme:
Default Theme

Use TypeScript for config and theme files?
Yes

Add VitePress npm scripts to package.json?
Yes

Where should VitePress initialize the config?
./
```

Add vitepress as dependency

> `npm add -D vitepress`

## Set up automated deployment

1. Create the file `.github/workflows/deploy.yml`
2. Populate with the following

```yml
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: Deploy VitePress site to Pages

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
    branches: [main]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      # - uses: pnpm/action-setup@v3 # Uncomment this block if you're using pnpm
      #   with:
      #     version: 9 # Not needed if you've set "packageManager" in package.json
      # - uses: oven-sh/setup-bun@v1 # Uncomment this if you're using Bun
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm # or pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # or pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./.vitepress/dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. Edit `.vitepress/config.mts` and add the `base` option

```json
  ...
  description: "General guidelines",
  base: "/guidelines",
  themeConfig: {
  ...
```

## Initialise git

Initialise git

> `git init`

Add modifications to the staging area

> `git add .`

Commit the changes

> `git commit -m init`

Ignore generated files

1. Add a `.gitignore` file in the root directory
2. Add the following lines to the file

```
.vscode
node_modules
.vitepress/dist
.vitepress/cache
```

# Commit

```bash
git init
git add .
git commit -m init
```

## Create a GitHub project

1. Create a repository on GitHub
2. Name the repository
3. Ensure the repository visibility is set to public
4. Create

## Update repository settings

1. Head to settings
2. Locate the `pages` tab
3. Under `Build and deployment` set `source` to `GitHub Actions`

## Push the project online

1. Copy the the repository's github URL
2. Set the remote origin

`git remote add origin git@github.com:<project>`

3. push

`git push origin main`
