const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config()
const Products = require('./data/Products')

const typeDefs = gql`
  type Products {
    productName: String
    ean: ID
    category: String
    description: String
    prixHT: Float
    tva: Float
    prixTTC: Float
    produitsAssocies:[String]
  }

  type Query {
    Products: [Products]
  }
`;


const resolvers = {
    Query: {
      Products: () => Products
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});