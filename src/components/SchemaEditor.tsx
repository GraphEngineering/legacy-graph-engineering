import * as React from "react";
import gql from "graphql-tag";

import { GraphComponent, withGraphQL } from "./withGraphQL";
import { IntrospectionQueryQuery as Data } from "../graphql";

const query = gql`
  query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      subscriptionType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const SchemaEditor: GraphComponent<{}, Data> = props =>
  !props.data ? (
    <div>Loading...</div>
  ) : (
    <div>
      {props.data.__schema ? (
        <Schema __schema={props.data.__schema} />
      ) : (
        "`__schema` wasn't loaded"
      )}
    </div>
  );

const primitiveScalars = ["String", "Boolean"];

const isUserType = ({ name }: { name: string | null }) =>
  name && !name.startsWith("__") && !primitiveScalars.includes(name);

const Schema: React.StatelessComponent<Data> = ({
  __schema: { queryType, types }
}) => (
  <ul>
    <li>query: {queryType.name}</li>
    <li>
      types:
      {types.filter(isUserType).map(type => (
        <ul>
          <li>
            {type.name}
            <ul>
              <li>
                fields:
                <ul>
                  {type.fields &&
                    type.fields.map(field => (
                      <li>
                        {field.name}
                        <ul>
                          <li>
                            type:
                            <ul>
                              {field.type.name && (
                                <li>name: {field.type.name}</li>
                              )}
                              <li>kind: {field.type.kind}</li>
                              <li>
                                ofType: {JSON.stringify(field.type.ofType)}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      ))}
    </li>
  </ul>
);

export default withGraphQL<{}, Data>(SchemaEditor, query);
