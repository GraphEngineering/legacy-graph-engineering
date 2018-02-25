import { Action } from "../types/generated";

export default interface App {
  query: {
    count: number;
  };
  mutation: () => Action;
};
