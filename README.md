# Static-TS Monorepo Starter Pack

**BIG WIP: This is a work in progress, and is not ready for use.**

Feature-heavy monorepo boilerplate for static web apps.

**See the [docs](./docs/README.md), for list of features, guides, explanations.**

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

## Status

| Name       | Type    | Status                                                                                                                                                                                                                                                            |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General    | General | [![General](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/general.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/general.yml)                                                |
| Web        | App     | [![Build Web App](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-apps-web.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-apps-web.yml)                            |
| CMS Client | Package | [![Build CMS Client](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-clients-cms.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-clients-cms.yml) |

## Apps

- [`apps/web`](apps/web): Astro web app

## Packages

- [`packages/clients/cms`](packages/clients/cms): CMS client library
- [`packages/config/eslint`](packages/config/eslint): Shared eslint config
- [`packages/config/stylelint`](packages/config/stylelint): Shared stylelint config
- [`packages/config/tsconfig`](packages/config/tsconfig): Shared tsconfig

## Setup

### Install dependencies

```bash
pnpm install
```

### Prepare pre-commit hook

Only if you want those:

```bash
pnpm husky:setup
```

## Available scripts

### Run apps

```bash
pnpm dev
```

### Build all

```bash
pnpm build
```

### Lint all

```bash
pnpm lint

# To fix lint
pnpm lint:fix

# For file names
pnpm lint:ls

# To only apply to root
pnpm lint:root
pnpm lint:root:fix

# Fix lint on staged files
pnpm lint:staged
```

### Format

```bash
pnpm format

# To fix format
pnpm format:fix
```

### Cleanup files

```bash
pnpm yeet
```
