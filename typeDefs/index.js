const { gql } = require("apollo-server-express");

const userType = require("./user");
const taskType = require("./task");

const typeDefs = gql`
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type Subscription {
    _: String
  }
`;

module.exports = [typeDefs, userType, taskType];
