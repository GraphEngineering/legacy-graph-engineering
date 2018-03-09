import * as React from "react";
import { IntrospectionField } from "graphql";

import TypeRef from "../TypeRef";
import * as styles from "./index.scss";

export default ({
  name,
  description,
  args,
  type,
  isDeprecated,
  deprecationReason
}: IntrospectionField) => (
  <div className={styles.field} key={name}>
    <div className={styles.definition}>
      <span className={styles["field-name"]}>{name}</span>
      <TypeRef type={type} />
    </div>
    {description && <div className={styles.description}>{description}</div>}
  </div>
);
