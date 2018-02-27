# Graph Engineering

## Quirks

### TypeScript GraphQL (@types/graphql)

`graphqlSync` isn't defined, so a module declaration is required to make
TypeScript happy.

### Parcel Build Issues

Some of the dependencies this project uses cause `parcel` to fail unless
`babel-plugin-remove-comments` and
`babel-plugin-transform-es2015-modules-commonjs` are installed as developer
dependencies.
