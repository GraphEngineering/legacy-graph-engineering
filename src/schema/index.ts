declare var require: any;
export const schema = require("./App.graphql");

export const defaults = {
  test: "HA!"
};

export const resolvers = {
  Query: {
    message: (_: any, { name }: { name: string }) => `Hello ${name}!`
  }
};
