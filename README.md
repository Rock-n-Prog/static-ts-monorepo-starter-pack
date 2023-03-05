# Static-TS Monorepo Starter Pack

Feature-heavy monorepo boilerplate for static web apps, packed with tons of reusable code snippets and defined through a
strong software architecture. Kind of inspired by [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo).

**See the [docs](./docs/README.md), for list of features, guides, explanations.**

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

## Status

| Name        | Type    | Status                                                                                                                                                                                                                                                                     |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General     | General | [![General](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/general.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/general.yml)                                                         |
| Web API     | App     | [![Build Web API](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-apps-api.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-apps-api.yml)                                     |
| Database    | Package | [![Build Database Package](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-db.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-db.yml)                      |
| API         | Package | [![Build API Package](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-api.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-api.yml)                         |
| Theme       | Package | [![Build Theme Package](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-theme.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-theme.yml)                   |
| Web UI      | Package | [![Build Web UI Package](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-ui.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-ui.yml)                |
| Web Forms   | Package | [![Build Web Forms Package](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-forms.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-forms.yml)       |
| Web Locales | Package | [![Build Web Locales Package](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-locales.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-locales.yml) |
| Web Storage | Package | [![Build Web Storage Package](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-storage.yml/badge.svg)](https://github.com/rock-n-prog/static-ts-monorepo-starter-pack/actions/workflows/build-packages-web-storage.yml) |

## Apps

- [`apps/api`](apps/docs): Next.js web API

## Packages

- [`packages/db`](packages/db): Prisma client and models definitions
- [`packages/api`](packages/api): tRPC routes and context definitions
- [`packages/theme`](packages/theme): Theme definition
- [`packages/web/ui`](packages/web/web/ui): React components for web app
- [`packages/web/forms`](packages/web/forms): React form-specific components for forms app
- [`packages/web/locales`](packages/web/locales): Locale translations for web app
- [`packages/web/storage`](packages/web/storage): Storage utilities for web app
- [`packages/config/eslint/`](packages/config/eslint): Shared eslint config
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

### Setup database

```bash
# Copy env file
pnpm env:local

# Run database
docker compose up

# Generate Prisma client
pnpm db:generate

# Apply migrations
pnpm db:migrate:dev

# If wanted, generate example data
pnpm db:seed
```

## Available scripts

### Run apps

```bash
pnpm dev
```

### Run storybook

#### Web UI Library

Storybook will be running on [http://localhost:6006](http://localhost:6006);

```bash
pnpm storybook:web
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
