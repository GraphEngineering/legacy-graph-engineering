import { Dispatch } from "react-redux";
import { Graph } from "../graphql";
import { Action } from "../types/generated";

export default interface App {
  query: {
    App: {
      count: number;
    };
  };
  mutation: {
    Increment: () => Action;
  };
};
