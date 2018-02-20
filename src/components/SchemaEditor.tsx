import * as React from "react";
import gql from "graphql-tag";

import { GraphComponent, withGraphQL } from "./withGraphQL";
import { IntrospectionQueryQuery as Data } from "../graphql";

// const query = gql`
//   query IntrospectionQuery {
//     __schema {
//       queryType {
//         name
//       }
//       mutationType {
//         name
//       }
//       subscriptionType {
//         name
//       }
//       types {
//         ...FullType
//       }
//       directives {
//         name
//         description
//         locations
//         args {
//           ...InputValue
//         }
//       }
//     }
//   }

//   fragment FullType on __Type {
//     kind
//     name
//     description
//     fields(includeDeprecated: true) {
//       name
//       description
//       args {
//         ...InputValue
//       }
//       type {
//         ...TypeRef
//       }
//       isDeprecated
//       deprecationReason
//     }
//     inputFields {
//       ...InputValue
//     }
//     interfaces {
//       ...TypeRef
//     }
//     enumValues(includeDeprecated: true) {
//       name
//       description
//       isDeprecated
//       deprecationReason
//     }
//     possibleTypes {
//       ...TypeRef
//     }
//   }

//   fragment InputValue on __InputValue {
//     name
//     description
//     type {
//       ...TypeRef
//     }
//     defaultValue
//   }

//   fragment TypeRef on __Type {
//     kind
//     name
//     ofType {
//       kind
//       name
//       ofType {
//         kind
//         name
//         ofType {
//           kind
//           name
//           ofType {
//             kind
//             name
//             ofType {
//               kind
//               name
//               ofType {
//                 kind
//                 name
//                 ofType {
//                   kind
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const query = gql`
  query IntrospectionQuery {
    message(name: "Todd")
    # __schema {
    #   queryType {
    #     name
    #   }
    # }
  }
`;

const SchemaEditor: GraphComponent<{}, Data> = props =>
  !props.data ? <div>Loading...</div> : <div>{props.data.message}</div>;

// const Schema: React.StatelessComponent<Data> = ({
//   __schema: { queryType, types }
// }) => (
//   <ul>
//     <li>Query: {queryType}</li>
//     <li>
//       {/* {types.map(({ name }) => (
//         <ul>
//           <li>{name}</li>
//         </ul>
//       ))} */}
//     </li>
//   </ul>
// );

export default withGraphQL<{}, Data>(SchemaEditor, query);
