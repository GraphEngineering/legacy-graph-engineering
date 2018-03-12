import * as React from "react";
import { IntrospectionEnumType, IntrospectionEnumValue } from "graphql";

import { Type } from "../Type";
import { Description } from "../Description";
import { Deprecations, DeprecationReason } from "../Deprecations";

import * as styles from "./index.scss";

export const EnumType: React.StatelessComponent<{
  enumType: IntrospectionEnumType;
}> = ({ enumType }) => {
  const groupedValues = groupDeprecations(enumType.enumValues);

  return (
    <Type type={enumType}>
      <div className={styles.enum}>
        {groupedValues.active.map(value => (
          <Value value={value} key={value.name} />
        ))}
        <Deprecations>
          {groupedValues.deprecated.map(value => (
            <Value value={value} key={value.name} />
          ))}
        </Deprecations>
      </div>
    </Type>
  );
};

const Value: React.StatelessComponent<{
  value: IntrospectionEnumValue;
}> = ({ value: { name, description, deprecationReason } }) => (
  <div className={styles.value}>
    <div className={styles.name}>{name}</div>
    <Description>{description}</Description>
    <DeprecationReason>{deprecationReason}</DeprecationReason>
  </div>
);

const groupDeprecations = (
  values: IntrospectionEnumValue[]
): {
  active: IntrospectionEnumValue[];
  deprecated: IntrospectionEnumValue[];
} =>
  values.reduce(
    (groupedValues, value) => {
      const groupName = value.isDeprecated ? "deprecated" : "active";
      return {
        ...groupedValues,
        [groupName]: [...groupedValues[groupName], value]
      };
    },
    {
      active: [],
      deprecated: []
    }
  );
