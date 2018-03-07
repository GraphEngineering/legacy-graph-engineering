import { NamedOperationDocuments } from "./groupOperationDocuments";

interface DispatchProps {
  [mutationName: string]: () => { type: string };
}

export default (
  namedMutationDocuments: NamedOperationDocuments
): DispatchProps =>
  Object.keys(namedMutationDocuments).reduce(
    (actionCreators, mutationName) => ({
      ...actionCreators,
      [mutationName]: () => ({ type: mutationName })
    }),
    {}
  );
