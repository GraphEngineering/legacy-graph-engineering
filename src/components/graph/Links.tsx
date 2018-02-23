import * as React from "react";
import * as d3 from "d3";
import { d3Types } from "./types";

interface Props {
  links: d3Types.d3Link[];
}

interface InternalProps {
  link: d3Types.d3Link;
}

class Link extends React.Component<InternalProps, {}> {
  ref: SVGLineElement;

  constructor(props: any, context?: any) {
    super(props, context);
  }

  componentDidMount() {
    d3.select(this.ref).data([this.props.link]);
  }

  render() {
    return (
      <line
        className="link"
        ref={(ref: SVGLineElement) => (this.ref = ref)}
        strokeWidth={Math.sqrt(this.props.link.value)}
      />
    );
  }
}

class Links extends React.Component<Props, {}> {
  render() {
    const links = this.props.links.map(
      (link: d3Types.d3Link, index: number) => {
        return <Link key={index} link={link} />;
      }
    );

    return <g className="links">{links}</g>;
  }
}

export default Links;
