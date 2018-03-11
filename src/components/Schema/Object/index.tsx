import * as React from "react";
import {
  IntrospectionType,
  IntrospectionObjectType,
  IntrospectionField
} from "graphql";

import { typeId } from "../utils";

import Field from "../Field";
import Enum from "../Enum";

import * as styles from "./index.scss";

export default ({ type }: { type: IntrospectionType }) => {
  switch (type.kind) {
    case "OBJECT":
      return <ObjectType type={type} />;
    case "ENUM":
      return <Enum type={type} />;
    default:
      return null;
  }
};

const Type: React.StatelessComponent<{ type: IntrospectionType }> = ({
  type: { name, description },
  children
}) => (
  <div id={typeId(name)} className={styles.type} key={name}>
    <div className={styles.name}>{name}</div>
    {description && <div className={styles.description}>{description}</div>}
    {children}
  </div>
);

const ObjectType: React.StatelessComponent<{
  type: IntrospectionObjectType;
}> = ({ type }) => {
  const { fields, interfaces } = type;
  const groupedFields = groupFields(fields);

  return (
    <Type type={type}>
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

      {groupedFields.normal.length > 0 && (
        <div className={styles.fields}>
          {groupedFields.normal.map(field => (
            <Field field={field} key={field.name} />
          ))}
        </div>
      )}

      {groupedFields.deprecated.length > 0 && (
        <div className={`${styles.fields} ${styles.deprecations}`}>
          <h1>Deprecations</h1>
          {groupedFields.deprecated.map(field => (
            <Field field={field} key={field.name} />
          ))}
        </div>
      )}
    </Type>
  );
};

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
