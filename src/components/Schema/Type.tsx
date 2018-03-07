import * as React from "react";

import { IntrospectionType } from "graphql";

export default ({ name, description }: IntrospectionType) => (
  <div className="type" key={name}>
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
);
