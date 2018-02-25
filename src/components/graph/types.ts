export namespace d3Types {
  export type d3Node = {
    name: string;
    children?: d3Node[];
  };

  export type d3Tree = {
    name: string;
    children: d3Node[];
  };
}
