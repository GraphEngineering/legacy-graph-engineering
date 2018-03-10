import * as React from "react";
import {
  IntrospectionTypeRef,
  IntrospectionListTypeRef,
  IntrospectionNonNullTypeRef
} from "graphql";

import { typeId } from "../utils";

import * as styles from "./index.scss";

export default ({ type }: { type: IntrospectionTypeRef }) => (
  <div className={styles["type-ref"]}>
    is<TypeRef type={type} />
  </div>
);

const TypeRef: React.StatelessComponent<{
  type: IntrospectionTypeRef;
  parent?: IntrospectionTypeRef;
}> = ({ type, parent }) =>
  isTypeRefList(type) ? (
    type.ofType && (
      <span>
        <strong>list</strong> of [
        <TypeRef type={type.ofType} parent={type} />
        ]
      </span>
    )
  ) : isTypeRefNonNullable(type) ? (
    type.ofType && (
      <span>
        <strong>required</strong>
        <TypeRef type={type.ofType} parent={type} />
      </span>
    )
  ) : (
    <span>
      {isTypeRefNullable(type, parent) && <strong>optional </strong>}
      <a className={styles.name} href={`#${typeId(type.name)}`}>
        {type.name}
      </a>
    </span>
  );

const isTypeRefNullable = (
  type: IntrospectionTypeRef,
  parent?: IntrospectionTypeRef
) => {
  const isParentNonNullable = parent && isTypeRefNonNullable(parent);
  const isWrapperType = isTypeRefList(type) || isTypeRefNonNullable(type);

  return !isParentNonNullable && !isWrapperType;
};

const isTypeRefList = (
  type: IntrospectionTypeRef
): type is IntrospectionListTypeRef => type.kind === "LIST";

const isTypeRefNonNullable = (
  type: IntrospectionTypeRef
): type is IntrospectionNonNullTypeRef => type.kind === "NON_NULL";
