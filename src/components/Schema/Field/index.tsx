import * as React from "react";
import { IntrospectionField } from "graphql";

import { TypeRef } from "../TypeRef";
import { Description } from "../Description";
import { DeprecationReason } from "../Deprecations";

import * as styles from "./index.scss";

export const Field: React.StatelessComponent<{
  field: IntrospectionField;
}> = ({ field: { name, description, args, type, deprecationReason } }) => (
  <div className={styles.field} key={name}>
    <div className={styles.definition}>
      <div className={styles.name}>{name}</div>
      <TypeRef type={type} />
      <Description>{description}</Description>
      <DeprecationReason>{deprecationReason}</DeprecationReason>
    </div>
  </div>
);
