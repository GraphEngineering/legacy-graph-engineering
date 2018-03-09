import * as React from "react";
import { IntrospectionType, IntrospectionObjectType } from "graphql";

import { typeId } from "../utils";

import Field from "../Field";
import * as styles from "./index.scss";

export default (type: IntrospectionType) =>
  type.kind === "OBJECT" ? ObjectType(type) : null;

const ObjectType = ({
  name,
  description,
  fields,
  interfaces
}: IntrospectionObjectType) => (
  <div id={typeId(name)} className={styles.type} key={name}>
    <div className={styles.definition}>
      <span className={styles.name}>{name}</span>
      {interfaces.length > 0 && (
        <span className={styles.implements}>
          implements
          {interfaces.map(({ name: interfaceName }) => (
            <a
              className={styles["type-ref"]}
              href={`#${typeId(interfaceName)}`}
              key={interfaceName}
            >
              {interfaceName}
            </a>
          ))}
        </span>
      )}
    </div>
    {description && <div className={styles.description}>{description}</div>}
    <div className={styles.fields}>{fields.map(Field)}</div>
  </div>
);
