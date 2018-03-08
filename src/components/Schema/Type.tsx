import * as React from "react";

import {
  IntrospectionType,
  IntrospectionObjectType,
  IntrospectionField,
  IntrospectionTypeRef,
  IntrospectionListTypeRef,
  IntrospectionNonNullTypeRef
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
    {description && <div className="description">{description}</div>}
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
      <TypeRef type={type} />
    </div>
    {description && <div className="description">{description}</div>}
  </div>
);

const TypeRef: React.StatelessComponent<{
  type: IntrospectionTypeRef;
}> = ({ type }) =>
  isTypeRefList(type) ? (
    <span className="type-ref list">
      {type.ofType && (
        <React.Fragment>
          [<TypeRef type={type.ofType} />]
        </React.Fragment>
      )}
    </span>
  ) : isTypeRefNonNull(type) ? (
    <span className="type-ref non-null">
      {type.ofType && (
        <React.Fragment>
          <TypeRef type={type.ofType} />!
        </React.Fragment>
      )}
    </span>
  ) : (
    <span className="type-ref named">
      {type.kind !== "SCALAR" ? (
        <a className="name" href={`#${typeId(type.name)}`}>
          {type.name}
        </a>
      ) : (
        <span className="name">{type.name}</span>
      )}
    </span>
  );

const isTypeRefList = (
  type: IntrospectionTypeRef
): type is IntrospectionListTypeRef => type.kind === "LIST";

const isTypeRefNonNull = (
  type: IntrospectionTypeRef
): type is IntrospectionNonNullTypeRef => type.kind === "NON_NULL";
