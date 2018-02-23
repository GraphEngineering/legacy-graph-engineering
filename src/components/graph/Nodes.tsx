import * as React from "react";
import * as d3 from "d3";
import { d3Types } from "./types";

interface Props {
  nodes: d3Types.d3Node[];
  simulation: any;
}

interface InternalProps {
  node: d3Types.d3Node;
  color: string;
}

class Node extends React.Component<InternalProps, {}> {
  ref: SVGCircleElement;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return (
      <circle
        className="node"
        r={5}
        fill={this.props.color}
        ref={(ref: SVGCircleElement) => (this.ref = ref)}
      >
        <title>{this.props.node.id}</title>
      </circle>
    );
  }
}

class Nodes extends React.Component<Props, {}> {
  componentDidMount() {
    const simulation = this.props.simulation;

    this.initDragBehavior(simulation);
  }

  render() {
    const color = d3.scaleOrdinal(d3.schemeCategory20);
    const nodes = this.props.nodes.map(
      (node: d3Types.d3Node, index: number) => {
        return (
          <Node key={index} node={node} color={color(node.group.toString())} />
        );
      }
    );

    return <g className="nodes">{nodes}</g>;
  }

  private initDragBehavior = (simulation: any) => {
    d3.selectAll(".node").call(
      d3
        .drag()
        .on("start", onDragStart)
        .on("drag", onDrag)
        .on("end", onDragEnd)
    );

    function onDragStart(d: any) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function onDrag(d: any) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function onDragEnd(d: any) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  };
}

export default Nodes;
