import { Source, ExecutionResult, print, graphqlSync } from "graphql";

import { NamedOperationDocuments } from "./groupOperationDocuments";
import { schema } from "../../graphql";

type MapStateToProps = (
  state: any
) => {
  [queryName: string]: ExecutionResult;
};

export default (
  namedQueryDocuments: NamedOperationDocuments
): MapStateToProps => {
  const namedQuerySources = Object.entries(namedQueryDocuments).reduce(
    (sources, [name, document]) => ({
      ...sources,
      [name]: new Source(print(document))
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
