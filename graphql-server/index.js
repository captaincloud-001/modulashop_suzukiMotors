const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = `
  type Product {
    id: ID!
    name: String!
    price: String!
    category: String!
    inStock: Boolean!
  }

  type Order {
    id: ID!
    item: String!
    status: String!
    total: String!
    date: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type Query {
    products: [Product!]!
    orders: [Order!]!
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    products: () => [
      { id: '1', name: 'Laptop Pro', price: '$1299', category: 'Electronics', inStock: true },
      { id: '2', name: 'iPhone 15', price: '$999', category: 'Mobile', inStock: true },
      { id: '3', name: 'iPad Air', price: '$749', category: 'Tablet', inStock: false },
      { id: '4', name: 'AirPods Pro', price: '$249', category: 'Audio', inStock: true },
      { id: '5', name: 'MacBook Air', price: '$1099', category: 'Electronics', inStock: true },
    ],
    orders: () => [
      { id: 'ORD-001', item: 'Laptop Pro', status: 'Delivered', total: '$1299', date: '2026-04-01' },
      { id: 'ORD-002', item: 'iPhone 15', status: 'Shipped', total: '$999', date: '2026-04-15' },
      { id: 'ORD-003', item: 'iPad Air', status: 'Processing', total: '$749', date: '2026-04-28' },
      { id: 'ORD-004', item: 'AirPods Pro', status: 'Delivered', total: '$249', date: '2026-03-20' },
    ],
    users: () => [
      { id: '1', name: 'John Doe', email: 'john@modulashop.com', role: 'Admin' },
      { id: '2', name: 'Jane Smith', email: 'jane@modulashop.com', role: 'Customer' },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
}).then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`);
});