export default interface Operations {
  App: {
    data: {
      count: number;
      fragmentTest: {
        field: string;
      };
    };
  };
  Increment: () => any;
};
