const { gql } = require("apollo-server");

const typeDefs = gql`
  type Brewery {
    id: ID!
    name: String
    breweryType: String
    street: String
    city: String
    state: String
    postalCode: String
    country: String
    longitude: String
    latitude: String
    phone: String
    websiteUrl: String
    updatedAt: String
    tagList: [String]!
  }

  type Query {
    breweries: [Brewery]!
    brewery(id: ID!): Brewery
  }
`;

module.exports = typeDefs;
