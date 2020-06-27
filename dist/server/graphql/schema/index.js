"use strict";
/**
 * Primary file for GraphQL Schema
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const index_1 = tslib_1.__importDefault(require("../resolvers/index"));
const typeDefs = apollo_server_express_1.gql `
  type Query {
    users: [User!]!
    user(userId: ID!): User!
    login(email: String!, password: String!): AuthData!
  }
  type Mutation {
    createUser(userInput: UserInput): AuthData!
    updateUser(userId: ID!, updateUser: UpdateUser): User!
  }
  type Subscription {
    userAdded: User
  }
  type User {
    _id: ID!
    email: String!
    name: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  input UserInput {
    email: String!
    name: String!
    password: String!
  }
  input UpdateUser {
    email: String
    name: String
    password: String
  }
`;
const schema = {
    typeDefs,
    resolvers: index_1.default,
    introspection: true,
    context: ({ req, connection, payload }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (connection) {
            return { isAuth: payload.authToken };
        }
        return { isAuth: req.isAuth };
    }),
    playground: true
};
exports.default = schema;
//# sourceMappingURL=index.js.map