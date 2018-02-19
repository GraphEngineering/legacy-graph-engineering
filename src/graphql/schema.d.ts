declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  export const schema: DocumentNode;
}
