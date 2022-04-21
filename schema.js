const { gql } = require("apollo-server");
//productsFilterInput non nullable because i want to retrive all product without filtering too
//if you want to filter products inside the category besed on onSale, you need to add filter arg there too...

exports.typeDef = gql`
  type Query {
    hello: String!
    products(filter: productsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: productsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input productsFilterInput {
    avgRating: Int
    onSale: Boolean
  }
`;
