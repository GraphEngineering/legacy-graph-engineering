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
}> = ({ type, parent }) => {
  const isParentNonNullable = parent && isTypeRefNonNullable(parent);
  const optionalMarker = (!isParentNonNullable || !parent) && (
    <strong>optional </strong>
  );

  if (isTypeRefList(type) && type.ofType) {
    return (
      type.ofType && (
        <span>
          {optionalMarker}
          <strong>list</strong> of [
          <TypeRef type={type.ofType} parent={type} />
          ]
        </span>
      )
    );
  }

  if (isTypeRefNonNullable(type) && type.ofType) {
    return (
      <span>
        <strong>required</strong>
        <TypeRef type={type.ofType} parent={type} />
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
