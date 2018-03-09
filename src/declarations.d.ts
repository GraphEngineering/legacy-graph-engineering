declare module "*.scss" {
  const content: { [sourceclassName: string]: string };
  export = content;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const schemaAST: DocumentNode;
  export = schemaAST;
}
