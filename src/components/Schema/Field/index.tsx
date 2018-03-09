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
  <div
    className={`${styles.field} ${isDeprecated && styles.deprecated}`}
    key={name}
  >
    <div className={styles.definition}>
      <div className={styles.name}>
        {isDeprecated && "❌"} {name}
      </div>
      <TypeRef type={type} />
      {description && <div className={styles.description}>{description}</div>}
    </div>
    {deprecationReason && (
      <div className={styles["deprecation-reason"]}>{deprecationReason}</div>
    )}
  </div>
);
