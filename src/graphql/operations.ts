/* tslint:disable */
//  This file was automatically generated and should not be edited.

// A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.
export enum __DirectiveLocation {
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", // Location adjacent to an argument definition.
  ENUM = "ENUM", // Location adjacent to an enum definition.
  ENUM_VALUE = "ENUM_VALUE", // Location adjacent to an enum value definition.
  FIELD = "FIELD", // Location adjacent to a field.
  FIELD_DEFINITION = "FIELD_DEFINITION", // Location adjacent to a field definition.
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", // Location adjacent to a fragment definition.
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD", // Location adjacent to a fragment spread.
  INLINE_FRAGMENT = "INLINE_FRAGMENT", // Location adjacent to an inline fragment.
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", // Location adjacent to an input object field definition.
  INPUT_OBJECT = "INPUT_OBJECT", // Location adjacent to an input object type definition.
  INTERFACE = "INTERFACE", // Location adjacent to an interface definition.
  MUTATION = "MUTATION", // Location adjacent to a mutation operation.
  OBJECT = "OBJECT", // Location adjacent to an object type definition.
  QUERY = "QUERY", // Location adjacent to a query operation.
  SCALAR = "SCALAR", // Location adjacent to a scalar definition.
  SCHEMA = "SCHEMA", // Location adjacent to a schema definition.
  SUBSCRIPTION = "SUBSCRIPTION", // Location adjacent to a subscription operation.
  UNION = "UNION", // Location adjacent to a union definition.
}


// An enum describing what kind of type a given `__Type` is.
export enum __TypeKind {
  ENUM = "ENUM", // Indicates this type is an enum. `enumValues` is a valid field.
  INPUT_OBJECT = "INPUT_OBJECT", // Indicates this type is an input object. `inputFields` is a valid field.
  INTERFACE = "INTERFACE", // Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.
  LIST = "LIST", // Indicates this type is a list. `ofType` is a valid field.
  NON_NULL = "NON_NULL", // Indicates this type is a non-null. `ofType` is a valid field.
  OBJECT = "OBJECT", // Indicates this type is an object. `fields` and `interfaces` are valid fields.
  SCALAR = "SCALAR", // Indicates this type is a scalar.
  UNION = "UNION", // Indicates this type is a union. `possibleTypes` is a valid field.
}


export interface IntrospectionQueryQuery {
  __schema:  {
    // The type that query operations will be rooted at.
    queryType:  {
      name: string | null,
    },
    // If this server supports mutation, the type that mutation operations will be rooted at.
    mutationType:  {
      name: string | null,
    } | null,
    // If this server support subscription, the type that subscription operations will be rooted at.
    subscriptionType:  {
      name: string | null,
    } | null,
    // A list of all types supported by this server.
    types:  Array< {
      kind: __TypeKind,
      name: string | null,
      description: string | null,
      fields:  Array< {
        name: string,
        description: string | null,
        args:  Array< {
          name: string,
          description: string | null,
          type:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                    ofType:  {
                      kind: __TypeKind,
                      name: string | null,
                      ofType:  {
                        kind: __TypeKind,
                        name: string | null,
                        ofType:  {
                          kind: __TypeKind,
                          name: string | null,
                        } | null,
                      } | null,
                    } | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          },
          // A GraphQL-formatted string representing the default value for this input value.
          defaultValue: string | null,
        } >,
        type:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                    ofType:  {
                      kind: __TypeKind,
                      name: string | null,
                      ofType:  {
                        kind: __TypeKind,
                        name: string | null,
                      } | null,
                    } | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        },
        isDeprecated: boolean,
        deprecationReason: string | null,
      } > | null,
      inputFields:  Array< {
        name: string,
        description: string | null,
        type:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                    ofType:  {
                      kind: __TypeKind,
                      name: string | null,
                      ofType:  {
                        kind: __TypeKind,
                        name: string | null,
                      } | null,
                    } | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        },
        // A GraphQL-formatted string representing the default value for this input value.
        defaultValue: string | null,
      } > | null,
      interfaces:  Array< {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                    ofType:  {
                      kind: __TypeKind,
                      name: string | null,
                    } | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } > | null,
      enumValues:  Array< {
        name: string,
        description: string | null,
        isDeprecated: boolean,
        deprecationReason: string | null,
      } > | null,
      possibleTypes:  Array< {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                    ofType:  {
                      kind: __TypeKind,
                      name: string | null,
                    } | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } > | null,
    } >,
    // A list of all directives supported by this server.
    directives:  Array< {
      name: string,
      description: string | null,
      locations: Array< __DirectiveLocation >,
      args:  Array< {
        name: string,
        description: string | null,
        type:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                    ofType:  {
                      kind: __TypeKind,
                      name: string | null,
                      ofType:  {
                        kind: __TypeKind,
                        name: string | null,
                      } | null,
                    } | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        },
        // A GraphQL-formatted string representing the default value for this input value.
        defaultValue: string | null,
      } >,
    } >,
  },
};

export interface FullTypeFragment {
  kind: __TypeKind,
  name: string | null,
  description: string | null,
  fields:  Array< {
    name: string,
    description: string | null,
    args:  Array< {
      name: string,
      description: string | null,
      type:  {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                    ofType:  {
                      kind: __TypeKind,
                      name: string | null,
                    } | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      },
      // A GraphQL-formatted string representing the default value for this input value.
      defaultValue: string | null,
    } >,
    type:  {
      kind: __TypeKind,
      name: string | null,
      ofType:  {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } | null,
    },
    isDeprecated: boolean,
    deprecationReason: string | null,
  } > | null,
  inputFields:  Array< {
    name: string,
    description: string | null,
    type:  {
      kind: __TypeKind,
      name: string | null,
      ofType:  {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                  ofType:  {
                    kind: __TypeKind,
                    name: string | null,
                  } | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } | null,
    },
    // A GraphQL-formatted string representing the default value for this input value.
    defaultValue: string | null,
  } > | null,
  interfaces:  Array< {
    kind: __TypeKind,
    name: string | null,
    ofType:  {
      kind: __TypeKind,
      name: string | null,
      ofType:  {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } | null,
    } | null,
  } > | null,
  enumValues:  Array< {
    name: string,
    description: string | null,
    isDeprecated: boolean,
    deprecationReason: string | null,
  } > | null,
  possibleTypes:  Array< {
    kind: __TypeKind,
    name: string | null,
    ofType:  {
      kind: __TypeKind,
      name: string | null,
      ofType:  {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } | null,
    } | null,
  } > | null,
};

export interface InputValueFragment {
  name: string,
  description: string | null,
  type:  {
    kind: __TypeKind,
    name: string | null,
    ofType:  {
      kind: __TypeKind,
      name: string | null,
      ofType:  {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
                ofType:  {
                  kind: __TypeKind,
                  name: string | null,
                } | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } | null,
    } | null,
  },
  // A GraphQL-formatted string representing the default value for this input value.
  defaultValue: string | null,
};

export interface TypeRefFragment {
  kind: __TypeKind,
  name: string | null,
  ofType:  {
    kind: __TypeKind,
    name: string | null,
    ofType:  {
      kind: __TypeKind,
      name: string | null,
      ofType:  {
        kind: __TypeKind,
        name: string | null,
        ofType:  {
          kind: __TypeKind,
          name: string | null,
          ofType:  {
            kind: __TypeKind,
            name: string | null,
            ofType:  {
              kind: __TypeKind,
              name: string | null,
              ofType:  {
                kind: __TypeKind,
                name: string | null,
              } | null,
            } | null,
          } | null,
        } | null,
      } | null,
    } | null,
  } | null,
};
