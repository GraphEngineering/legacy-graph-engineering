import * as React from "react";
import {
  IntrospectionSchema,
  IntrospectionObjectType,
  IntrospectionNamedTypeRef,
  IntrospectionField
} from "graphql";

import { typeId } from "../utils";

import { Type } from "../Type";
import { Field } from "../Field";
import { Deprecations } from "../Deprecations";

import * as styles from "./index.scss";

export const ObjectType: React.StatelessComponent<{
  schema: IntrospectionSchema;
  objectType: IntrospectionObjectType;
}> = ({ objectType }) => {
  const { interfaces, fields } = objectType;

  const groupedFields = groupFields(fields, interfaces);

  return (
    <Type type={objectType}>
      <div className={styles.object}>
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

        {groupedFields.active.length > 0 && (
          <div className={styles.fields}>
            {groupedFields.active.map(field => (
              <Field field={field} key={field.name} />
            ))}
          </div>
        )}

        <Deprecations>
          {groupedFields.deprecated.map(field => (
            <Field field={field} key={field.name} />
          ))}
        </Deprecations>
      </div>
    </Type>
  );
};

const groupFields = (
  fields: IntrospectionField[],
  interfaces?: IntrospectionNamedTypeRef[]
): {
  active: IntrospectionField[];
  deprecated: IntrospectionField[];
} => {
  return fields.reduce(
    (groupedFields, field) => {
      const groupName = field.isDeprecated ? "deprecated" : "active";
      return {
        ...groupedFields,
        [groupName]: [...groupedFields[groupName], field]
      };
    },
    {
      active: [],
      deprecated: []
    }
  );
};
