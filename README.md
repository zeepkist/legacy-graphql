# Zeepkist GraphQL Clients

Fully typed TypeScript GraphQL client (powered by GenQL) for Zeepkist, providing the [GTR and Workshop] GraphQL API for Zeepkist.

Download the GTR mod for Zeepkist in [Modkist] (Zeepkist's Mod Loader) or on [mod.io]

Please note that as this is an ever green package that automatically updates types when it detects the schemas change, breaking changes to the schema may occur in minor releases.

## Changelogs

- [Schema Changelogs](https://studio.apollographql.com/graph/zeepkist/variant/current/changelog)

## GraphQL IDEs

Explore and test your GraphQL queries on the GraphiQL IDE:  https://graphql.zeepki.st

## Convert GraphQL to GenQL Syntax

Use the online converter provided by GenQL to quickly convert a GrapQL query to a format usable by
this library:

- https://genql.dev/converter

## Usage

### CDN

```html
<script type="module">
  import { client } from 'https://esm.run/@zeepkist/graphql'

  const response = await client.query({
    ...
  })
</script>
```

### Deno

```js
import { client } from 'https://esm.run/@zeepkist/graphql'

const response = await client.query({
  ...
})
```

### Node / Bundlers

#### Install dependencies

```sh
yarn add @zeepkist/graphql

# or with npm:
npm install @zeepkist/graphql
```

#### Import and use

```ts
import { client } from '@zeepkist/graphql'

const response = await client.query({
  ...
})
```

#### Enums

Enums can be imported, for example:

```ts
import {
  client,
  enumLevelsOrderBy,
  RecordGenqlSelection,
  QueryGenqlSelection,
} from '@zeepkist/graphql'

const recordFragment: RecordGenqlSelection = {
  time: true,
  user: {
    steamId: true,
    steamName: true,
  }
}

const query: QueryGenqlSelection = {
  levels: {
    __args: {
      first: 10,
      orderBy: [enumLevelsOrderBy.LEVEL_POINT_COUNT_DESC]
    },
    nodes: {
      personalBestGlobals: {
        totalCount: true,
      },
      // Get the world record from the worldRecordGlobal
      worldRecordGlobals: {
        nodes: {
          record: recordFragment
        }
      },
      // Get the world record by filtering records for records that have a worldRecordGlobal relation
      records: {
        __args: {
          filter: {
            worldRecordGlobalsExist: true,
          }
        },
        nodes: recordFragment
      }
    }
  }
}

const response = await client.query({
  __name: 'GetExampleQuery',
  ...query
})
```

## Documentation

To see all available exports and options, see the [package documentation](https://zeepkist.github.io/graphql).

## Contributing

You will either need Node.js' CorePack enabled or an installation of pnpm to run this package locally. CorePack is recommended as it will automatically keep you updated with pnpm version the repository is using.

### Install development dependencies

```sh
pnpm i
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run tests

```sh
pnpm test
```

### Run tests with code coverage

```sh
pnpm coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Update schemas with the latest versions

```sh
pnpm generate
```

[GTR and Workshop]:https://graphql.zeepki.st
[Modkist]:https://zeepkist.fandom.com/wiki/Modkist_(Mod_Manager)
[mod.io]:https://zeepkist.mod.io/zeepkist-gtr
