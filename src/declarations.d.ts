declare module "*.scss" {
  const content: {
    [sourceClassName: string]: string;
  };

  export = content;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const schemaAST: DocumentNode;
  export = schemaAST;
}
