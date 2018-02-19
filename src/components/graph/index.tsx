import * as React from "react";
import * as d3 from "d3";
import { d3Types } from "./types";
import Links from "./Links";
import Nodes from "./Nodes";
import Labels from "./Labels";
// import "../styles/App.css";

interface Props {
  width: number;
  height: number;
  graph: d3Types.d3Graph;
}

export default class Graph extends React.Component<Props, {}> {
  simulation: any;

  constructor(props: Props) {
    super(props);

    this.simulation = d3
      .forceSimulation()
      .force("link", d3.forceLink().id((d: d3Types.d3Node) => d.id))
      .force("charge", d3.forceManyBody().strength(-100))
      .force(
        "center",
        d3.forceCenter(this.props.width / 2, this.props.height / 2)
      )
      .nodes(this.props.graph.nodes);

    this.simulation.force("link").links(this.props.graph.links);
  }

  componentDidMount() {
    this.simulation.nodes(this.props.graph.nodes).on("tick", this.onTick);
  }

  render() {
    const { width, height, graph } = this.props;

    return (
      <svg className="container" width={width} height={height}>
        <Links links={graph.links} />
        <Nodes nodes={graph.nodes} simulation={this.simulation} />
        <Labels nodes={graph.nodes} />
      </svg>
    );
  }

    private onTick = () => {
        const node = d3.selectAll(".node");
        const link = d3.selectAll(".link");
        const label = d3.selectAll(".label");

        link
            .attr("x1", (d: any) => d.source.x)
            .attr("y1", (d: any) => d.source.y)
            .attr("x2", (d: any) => d.target.x)
            .attr("y2", (d: any) => d.target.y);

        node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);

        label.attr("x", (d: any) => d.x + 5).attr("y", (d: any) => d.y + 5);
    };
}
