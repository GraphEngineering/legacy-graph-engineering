import * as React from "react";
import {
  IntrospectionType,
  IntrospectionObjectType,
  IntrospectionField
} from "graphql";

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
}: IntrospectionObjectType) => {
  const groupedFields = groupFields(fields);

  return (
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

      {groupedFields.normal.length > 0 && (
        <div className={styles.fields}>{groupedFields.normal.map(Field)}</div>
      )}
      {groupedFields.deprecated.length > 0 && (
        <div className={`${styles.fields} ${styles.deprecations}`}>
          <h1>Deprecations</h1>
          {groupedFields.deprecated.map(Field)}
        </div>
      )}
    </div>
  );
};

const Fields = ({ fields }: { fields: IntrospectionField[] }) => (
  <div className={styles.fields}>{fields.map(Field)}</div>
);

interface GroupedFields {
  normal: IntrospectionField[];
  deprecated: IntrospectionField[];
}

const groupFields = (fields: IntrospectionField[]): GroupedFields =>
  fields.reduce(
    (groupedFields, field) => {
      const groupName = field.isDeprecated ? "deprecated" : "normal";
      return {
        ...groupedFields,
        [groupName]: [...groupedFields[groupName], field]
      };
    },
    {
      normal: [],
      deprecated: []
    }
  );
