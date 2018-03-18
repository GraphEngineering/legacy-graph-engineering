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
    (previous, [name, document]) => ({
      ...previous,
      [name]: new Source(print(document))
    }),
    {}
  );

  return state =>
    Object.entries(namedQuerySources).reduce(
      (previous, [name, source]) => ({
        ...previous,
        [name]: graphqlSync(schema, source, state)
      }),
      {}
    );
};
