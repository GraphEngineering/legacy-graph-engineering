import * as React from "react";
import {
  IntrospectionField,
  IntrospectionTypeRef,
  IntrospectionListTypeRef,
  IntrospectionNonNullTypeRef
} from "graphql";

import { typeId } from "../utils";

import * as styles from "./index.scss";

export default ({ type }: { type: IntrospectionTypeRef }) => (
  <div className={styles["type-ref"]}>
    <TypeRef type={type} />
  </div>
);

const TypeRef: React.StatelessComponent<{
  type: IntrospectionTypeRef;
  parent?: IntrospectionTypeRef;
}> = ({ type, parent }) =>
  isTypeRefList(type) ? (
    type.ofType && (
      <span>
        list of {!parent && "("}
        <TypeRef type={type.ofType} parent={type} />
        {!parent && ")"}
      </span>
    )
  ) : isTypeRefNonNull(type) ? (
    type.ofType && (
      <span>
        required<TypeRef type={type.ofType} parent={type} />
      </span>
    )
  ) : type.kind !== "SCALAR" ? (
    <a className={styles.name} href={`#${typeId(type.name)}`}>
      {type.name}
    </a>
  ) : (
    <span>
      {isNullable(type, parent) && "optional"}
      <span className={styles.name}>{type.name}</span>
    </span>
  );

const isTypeRefList = (
  type: IntrospectionTypeRef
): type is IntrospectionListTypeRef => type.kind === "LIST";

const isTypeRefNonNull = (
  type: IntrospectionTypeRef
): type is IntrospectionNonNullTypeRef => type.kind === "NON_NULL";

const isNullable = (
  type: IntrospectionTypeRef,
  parent?: IntrospectionTypeRef
) => !parent;
