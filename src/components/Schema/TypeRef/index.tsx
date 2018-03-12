import * as React from "react";
import {
  IntrospectionTypeRef,
  IntrospectionListTypeRef,
  IntrospectionNonNullTypeRef
} from "graphql";

import { typeId } from "../utils";

import * as styles from "./index.scss";

export const TypeRef: React.StatelessComponent<{
  type: IntrospectionTypeRef;
  parent?: IntrospectionTypeRef;
}> = ({ type }) => (
  <div className={styles["type-ref"]}>
    is<TypeRefChild type={type} />
  </div>
);

const TypeRefChild: React.StatelessComponent<{
  type: IntrospectionTypeRef;
  parent?: IntrospectionTypeRef;
}> = ({ type, parent }) => {
  const isParentNonNullable = parent && isTypeRefNonNullable(parent);
  const optionalMarker = (!isParentNonNullable || !parent) && (
    <strong>optional </strong>
  );

  if (isTypeRefList(type)) {
    return type.ofType === undefined ? null : (
      <span>
        {optionalMarker}
        <strong>list</strong> of [
        <TypeRefChild type={type.ofType} parent={type} />
        ]
      </span>
    );
  }

  if (isTypeRefNonNullable(type)) {
    return type.ofType === undefined ? null : (
      <span>
        <strong>required</strong>
        <TypeRefChild type={type.ofType} parent={type} />
      </span>
    );
  }

  return (
    <span>
      {optionalMarker}
      <a className={styles.name} href={`#${typeId(type.name)}`}>
        {type.name}
      </a>
    </span>
  );
};

const isTypeRefList = (
  type: IntrospectionTypeRef
): type is IntrospectionListTypeRef => type.kind === "LIST";

const isTypeRefNonNullable = (
  type: IntrospectionTypeRef
): type is IntrospectionNonNullTypeRef => type.kind === "NON_NULL";
