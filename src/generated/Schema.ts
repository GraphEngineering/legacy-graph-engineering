import { IntrospectionSchema } from "graphql";

export interface Operations {
  IntrospectionQuery: {
    data: {
      schema: IntrospectionSchema;
    };
  };
}
