import * as React from "react";
import {
  IntrospectionField,
  IntrospectionTypeRef,
  IntrospectionListTypeRef,
  IntrospectionNonNullTypeRef
} from "graphql";

import { typeId } from "../utils";

import * as styles from "./index.scss";

const TypeRef: React.StatelessComponent<{
  type: IntrospectionTypeRef;
}> = ({ type }) => (
  <span className={styles["type-ref"]}>
    {isTypeRefList(type) ? (
      type.ofType && (
        <React.Fragment>
          [<TypeRef type={type.ofType} />]
        </React.Fragment>
      )
    ) : isTypeRefNonNull(type) ? (
      type.ofType && (
        <React.Fragment>
          <TypeRef type={type.ofType} />!
        </React.Fragment>
      )
    ) : type.kind !== "SCALAR" ? (
      <a className={styles.name} href={`#${typeId(type.name)}`}>
        {type.name}
      </a>
    ) : (
      <span className={styles.name}>{type.name}</span>
    )}
  </span>
);

export default TypeRef;

const isTypeRefList = (
  type: IntrospectionTypeRef
): type is IntrospectionListTypeRef => type.kind === "LIST";

const isTypeRefNonNull = (
  type: IntrospectionTypeRef
): type is IntrospectionNonNullTypeRef => type.kind === "NON_NULL";
