import { NamedOperationDocuments } from "./groupOperationDocuments";

export default (mutations: NamedOperationDocuments): {} =>
  Object.keys(mutations).reduce(
    (actionCreators, mutationName) => ({
      ...actionCreators,
      [mutationName]: () => ({ type: mutationName })
    }),
    {}
  );
