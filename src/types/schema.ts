export interface Schema {
  types: [Type];
  queryType: Type;
  mutationType: Type | null;
  subscriptionType: Type | null;
  directives: [Directive];
}

interface Type {
  kind: TypeKind;
  name: string | null;
  description: string | null;
}

type OutputObject = Type & {
  fields: [Field];
  interfaces: [Type];
};

type Interface = Type & {
  fields: [Field];
  possibleTypes: [Type];
};

type Union = Type & {
  possibleTypes: [Type];
};

type Enum = Type & {
  enumValues: [EnumValue];
};

type InputObject = Type & {
  inputFields: [InputValue];
};

type NonNull = Type & {
  ofType: Type;
};

type List = NonNull;

interface Field {
  name: string;
  description: string | null;
  args: [InputValue];
  type: Type;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

interface InputValue {
  name: string;
  description: string | null;
  type: Type;
  defaultValue: string | null;
}

interface EnumValue {
  name: string;
  description: string | null;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

enum TypeKind {
  SCALAR,
  OBJECT,
  INTERFACE,
  UNION,
  ENUM,
  INPUT_OBJECT,
  LIST,
  NON_NULL
}

interface Directive {
  name: string;
  description: string | null;
  locations: [DirectiveLocation];
  args: [InputValue];
}

enum DirectiveLocation {
  QUERY,
  MUTATION,
  SUBSCRIPTION,
  FIELD,
  FRAGMENT_DEFINITION,
  FRAGMENT_SPREAD,
  INLINE_FRAGMENT,
  SCHEMA,
  SCALAR,
  OBJECT,
  FIELD_DEFINITION,
  ARGUMENT_DEFINITION,
  INTERFACE,
  UNION,
  ENUM,
  ENUM_VALUE,
  INPUT_OBJECT,
  INPUT_FIELD_DEFINITION
}
