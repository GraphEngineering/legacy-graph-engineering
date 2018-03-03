import resolvers from "./resolvers";
import { fetchSchema } from "./utils";

const schema = fetchSchema("app", resolvers);

export * from "./graph";
export { schema, resolvers };
