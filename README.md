# Zeepkist GraphQL Clients

Fully typed TypeScript GraphQL clients for Zeepkist, including [GTR and Workshop] GraphQL APIs for Zeepkist.

Download the GTR mod for Zeepkist in [Modkist] (Zeepkist's Mod Loader) or on [mod.io]

Please note that as this is an ever green package that automatically updates types when it detects the schemas change, breaking changes may occur in minor releases.

## Changelogs

- [`gtr` Schema Changelogs](https://studio.apollographql.com/graph/zeepkist/variant/current/changelog)
- [`gtrBeta` Schema Changelogs](https://studio.apollographql.com/graph/zeepkist/variant/beta/changelog)

## GraphQL IDEs

Explore and test your GraphQL queries on the GraphiQL IDE:

- `gtr`: https://graphql.zeepki.st
- `gtrBeta`: https://graphql-beta.zeepki.st

## Usage

### CDN

```html
<script type="module">
  import { gtr, gtrBeta } from 'https://esm.run/@zeepkist/graphql'

  const gtrResponse = await gtr.query({
	...
  })

  const betaResponse = await gtrBeta.query({
	...
  })
</script>
```

### Deno

```js
import { gtr, gtrBeta } from 'https://esm.run/@zeepkist/graphql'

const gtrResponse = await gtr.query({
...
})

const betaResponse = await gtrBeta.query({
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
import { gtr, gtrBeta } from '@zeepkist/graphql'

const gtrResponse = await gtr.query({
...
})

const betaResponse = await gtrBeta.query({
...
})
```

#### Enums

Enums can be imported from the specific service you are using, for example:

```ts
import { gtr } from '@zeepkist/graphql'
import { enumUserPointsOrderBy } from '@zeepkist/graphql/gtr'

const response = await gtr.query({
  allPlayerPoints: {
    __args: {
      orderBy: [enumUserPointsOrderBy.POINTS_DESC]
    }
  }
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

[GTR and Workshop]:https://graphql.zeepki.st/graphiql
[Modkist]:https://zeepkist.fandom.com/wiki/Modkist_(Mod_Manager)
[mod.io]:https://zeepkist.mod.io/zeepkist-gtr
