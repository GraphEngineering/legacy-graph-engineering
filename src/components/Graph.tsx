import * as React from "react";
import * as D3 from "d3";

export class Graph extends React.Component {
  private svg?: SVGElement;

  constructor() {
    super();
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

    const simulation = D3.forceSimulation()
      .force("charge", D3.forceManyBody().strength(-50))
      .force("center", D3.forceCenter(width / 2, height / 2))
      .force(
        "link",
        D3.forceLink().id(({ id }) => id)
        // .strength(({ strength }) => 1)
      );

    const svg = D3.select(this.svg)
      .attr("width", width)
      .attr("height", height);

    const links = svg
      .append("g")
      .selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .attr("stroke-width", 1)
      .attr("stroke", "black");

    const nodes = svg
      .append("g")
      .selectAll("circle")
      .data(data.nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", "red");

    simulation.nodes(data.nodes).on("tick", () => {
      nodes
        .attr("cx", node => node.x || false)
        .attr("cy", node => node.y || false);

      links
        .attr("x1", link => link.source.x)
        .attr("y1", link => link.source.y)
        .attr("x2", link => link.target.x)
        .attr("y2", link => link.target.y);
    });

    simulation.force("link").links(data.links);
  }
}

const data: {
  nodes: Array<
    D3.SimulationNodeDatum & {
      id: string;
    }
  >;
  links: Array<{
    target: string;
    source: string;
    strength: number;
  }>;
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
  ],
  links: [
    { target: "mammal", source: "dog", strength: 0.7 },
    { target: "mammal", source: "cat", strength: 0.7 },
    { target: "mammal", source: "fox", strength: 0.7 },
    { target: "mammal", source: "elk", strength: 0.7 },
    { target: "insect", source: "ant", strength: 0.7 },
    { target: "insect", source: "bee", strength: 0.7 },
    { target: "fish", source: "carp", strength: 0.7 },
    { target: "fish", source: "pike", strength: 0.7 },
    { target: "cat", source: "elk", strength: 0.1 },
    { target: "carp", source: "ant", strength: 0.1 },
    { target: "elk", source: "bee", strength: 0.1 },
    { target: "dog", source: "cat", strength: 0.1 },
    { target: "fox", source: "ant", strength: 0.1 },
    { target: "pike", source: "dog", strength: 0.1 }
  ]
};
