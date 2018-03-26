import * as React from "react";
import * as D3 from "d3";

export class Graph extends React.Component {
  private svg?: SVGElement;

  constructor(props: {}) {
    super(props);
  }

  public render() {
    return <svg ref={svg => svg && (this.svg = svg)} />;
  }

  public componentDidMount() {
    this.graph();
  }

  private graph() {
    if (!this.svg) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = D3.select(this.svg)
      .attr("width", width)
      .attr("height", height);

    const simulation = D3.forceSimulation()
      .force("charge", D3.forceManyBody().strength(-20))
      .force("center", D3.forceCenter(width / 2, height / 2));

    const data: {
      nodes: Array<
        D3.SimulationNodeDatum & {
          id: string;
        }
      >;
    } = {
      nodes: [
        { id: "mammal" },
        { id: "dog" },
        { id: "cat" },
        { id: "fox" },
        { id: "elk" },
        { id: "insect" },
        { id: "ant" },
        { id: "bee" },
        { id: "fish" },
        { id: "carp" },
        { id: "pike" }
      ]
    };

    const nodes = svg
      .append("g")
      .selectAll("circle")
      .data(data.nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", "red");

    simulation.nodes(data.nodes).on("tick", () => {
      nodes.attr("cx", ({ x }) => x || false).attr("cy", ({ y }) => y || false);
    });
  }
}
