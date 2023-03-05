# General architecture

## Software architecture

**Diagrams might not work in GitHub Pages. If that's the case, see them
[here](https://github.com/Rock-n-Prog/static-ts-monorepo-starter-pack/blob/main/docs/architecture/general.md).**

### Components architecture

```mermaid
graph TD;
  apps-api((Web API))
  packages-web-ui(Web UI Package)
  component-serverless-functions([Serverless Functions])
  component-storybook-web-app([Storybook Web App])
  component-db[(Database)]

  subgraph WEB
    subgraph WEB-UI
      packages-web-ui --> |Deploys into| component-storybook-web-app
    end

    subgraph WEB-API
      apps-api --> |Deploys into| component-serverless-functions
      component-serverless-functions -.-> |Communicates to| component-db
    end
  end
```

### Packages architecture

```mermaid
graph TD;
  apps-api((Web API))
  packages-db(DB Package)
  packages-api(API Package)
  packages-theme(Theme Package)
  packages-web-ui(Web UI Package)
  packages-web-forms(Web Forms Package)
  packages-web-locales(Web Locales Package)
  packages-web-storage(Web Storage Package)

  subgraph WEB
    subgraph WEB-UI
      packages-web-forms -.-> |Uses| packages-web-ui
      packages-web-ui -.-> |Uses| packages-web-storage
    end

    subgraph WEB-API
      apps-api -.-> |Uses| packages-api
      packages-api -.-> |Uses| packages-db
    end
  end

  packages-web-ui -.-> |Uses| packages-theme
```

## File structure

For more info, see Turborepo file structure.

- `.github`: GitHub repo config and workflows
- `.husky`: Pre-commit hook config
- `apps`: Running apps
  - `api`: Web API (see [its docs](./apps/api.md))
- `docs`: Project documentation
- `packages`: Libraries
  - `db`: Prisma schema and client definitions (see [its docs](./packages/db.md))
  - `api`: tRPC routes and context definitions (see [its docs](./packages/api.md))
  - `theme`: Theme (color palette) definition (see [its docs](./packages/theme.md))
  - `web`: Web libraries
    - `ui`: Web UI library (see [its docs](packages/web/ui.md))
    - `forms`: Web forms library (see [its docs](./packages/web/forms.md))
    - `locales`: Web translations library (see [its docs](./packages/web/locale.md))
    - `storage`: Web storage library (see [its docs](./packages/web/storage.md))
  - `config`: Shared config
    - `eslint`: Set of eslint configs for given technologies
    - `stylelint`: Set of stylelint configs for given technologies
    - `tsconfig`: Set of TypeScript configs for given technologies
