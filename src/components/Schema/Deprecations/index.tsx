import * as React from "react";
import { DEFAULT_DEPRECATION_REASON } from "graphql";

import * as styles from "./index.scss";

export const Deprecations: React.StatelessComponent = ({ children }) => {
  if (!children || (children instanceof Array && children.length <= 0)) {
    return null;
  }

  return (
    <div className={styles.deprecations}>
      <h1>Deprecations</h1>
      {children}
    </div>
  );
};

export const DeprecationReason: React.StatelessComponent = ({ children }) => {
  if (
    !children ||
    (children instanceof Array && children.length <= 0) ||
    children === DEFAULT_DEPRECATION_REASON
  ) {
    return null;
  }

  return <div className={styles["deprecation-reason"]}>{children}</div>;
};
