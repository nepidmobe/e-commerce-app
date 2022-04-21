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

  type Mutation {
    addCategory(input: addCategoryInput!): Category!
    addProduct(input: addProductInput!): Product!
    addReview(input: addReviewInput!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: updateCategoryInput!): Category
    updateProduct(id: ID!, input: updateProductInput!): Product
    updateReview(id: ID!, input: updateReviewInput!): Review
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
  input addCategoryInput {
    name: String!
  }
  input updateCategoryInput {
    name: String!
  }
  input addProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: ID
  }
  input updateProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: ID
  }
  input addReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    priductId: ID!
  }
  input updateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    priductId: ID!
  }
`;
