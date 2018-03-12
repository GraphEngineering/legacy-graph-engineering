import * as React from "react";
import { IntrospectionType } from "graphql";

import { typeId } from "../utils";

import { Description } from "../Description";

import * as styles from "./index.scss";

export const Type: React.StatelessComponent<{ type: IntrospectionType }> = ({
  type: { name, description },
  children
}) => (
  <div id={typeId(name)} className={styles.type} key={name}>
    <div className={styles["name-and-description"]}>
      <div className={styles.name}>{name}</div>
      <Description>{description}</Description>
    </div>
    {children}
  </div>
);
