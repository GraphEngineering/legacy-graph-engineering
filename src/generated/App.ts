export default interface Operations {
  App: {
    count: number;
    fragmentTest: {
      field: string;
    };
  };
  Increment: () => any;
};
