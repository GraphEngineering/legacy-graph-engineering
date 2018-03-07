import { IntrospectionSchema } from "graphql";

export default interface Operations {
  IntrospectionQuery: {
    data: {
      schema: IntrospectionSchema;
    };
  };
};
