import resolvers from "./resolvers";
import { fetchSchema } from "./utils";

export * from "./graph";
export { resolvers };

export const schema = fetchSchema("app", resolvers);
