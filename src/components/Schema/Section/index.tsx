import * as React from "react";
import * as styles from "./index.scss";

export const Description: React.StatelessComponent = ({ children }) => {
  if (!children || (children instanceof Array && children.length <= 0)) {
    return null;
  }

  return <div className={styles.description}>{children}</div>;
};
