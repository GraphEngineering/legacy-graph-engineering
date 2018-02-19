export * from "./schema.graphql";
export * from "./operations";

export const defaults = {
  test: "HA!"
};

export const resolvers = {
  Query: {
    message: (_: any, { name }: { name: string }) => `Hello ${name}!`
  }
};
