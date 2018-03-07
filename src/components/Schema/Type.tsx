import * as React from "react";

import {
  IntrospectionType,
  IntrospectionObjectType,
  IntrospectionField,
  IntrospectionNamedTypeRef
} from "graphql";

export default (type: IntrospectionType) =>
  type.kind === "OBJECT" ? ObjectType(type) : null;

const ObjectType = ({
  name,
  description,
  fields,
  interfaces
}: IntrospectionObjectType) => (
  <div id={typeId(name)} className="type object" key={name}>
    <div className="definition">
      type
      <span className="name">{name}</span>
      {interfaces.length > 0 && (
        <span className="implements">
          implements
          {interfaces.map(({ name: interfaceName }) => (
            <a
              className="name"
              href={`#${typeId(interfaceName)}`}
              key={interfaceName}
            >
              {interfaceName}
            </a>
          ))}
        </span>
      )}
    </div>
    {/* {description && <span className="description">{description}<span/>} */}
    <div className="fields">{fields.map(Field)}</div>
  </div>
);

const typeId = (name: string) => `type-${name}`;

const Field = ({
  name,
  description,
  args,
  type,
  isDeprecated,
  deprecationReason
}: IntrospectionField) => (
  <div className="field" key={name}>
    <div className="definition">
      <span className="name">{name}</span>
    </div>
    {description && <div className="description">{description}</div>}
  </div>
);
