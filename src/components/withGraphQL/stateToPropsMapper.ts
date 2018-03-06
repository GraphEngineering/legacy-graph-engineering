import { ExecutionResult, print, graphqlSync } from "graphql";

import { NamedOperationDocuments } from "./groupOperationDocuments";
import { schema } from "../../graphql";

type StateMapper = (
  state: any
) => {
  [queryName: string]: ExecutionResult;
};

export default (queries: NamedOperationDocuments): StateMapper => {
  const namedQuerySources = Object.entries(queries).reduce(
    (sources, [name, document]) => ({
      ...sources,
      [name]: print(document)
    }),
    {}
  );

  return state =>
    Object.entries(namedQuerySources).reduce(
      (results, [name, source]) => ({
        ...results,
        [name]: graphqlSync(schema, source, state)
      }),
      {}
    );
};

export default (mutations: NamedOperationDocuments): {} =>
  Object.keys(mutations).reduce(
    (actionCreators, mutationName) => ({
      ...actionCreators,
      [mutationName]: () => ({ type: mutationName })
    }),
    {}
  );
