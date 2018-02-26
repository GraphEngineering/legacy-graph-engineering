export default interface App {
  query: {
    data: { count: number };
  };
  mutation: {
    increment: () => any;
  };
};
