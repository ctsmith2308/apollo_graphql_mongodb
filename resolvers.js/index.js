const { GraphQLDateTime } = require("graphql-iso-date");

const userRevolver = require("./user");
const taskResolver = require("./task");

const customDateScalarResolver = {
  Date: GraphQLDateTime
};

module.exports = [userRevolver, taskResolver, customDateScalarResolver];
