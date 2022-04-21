const { assertSchema } = require("graphql");
const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, args, context) => {
    const { categories } = context.db;
    const { input } = args;
    const newCategory = {
      id: uuid(),
      name: input.name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, args, context) => {
    const newProduct = {
      id: uuid(),
      ...args.input,
    };
    context.db.products.push(newProduct);
    return newProduct;
  },

  addReview: (parent, args, context) => {
    const newReview = {
      id: uuid(),
      ...args.input,
    };
    context.db.reviews.push(newReview);
    return newReview;
  },

  deleteCategory: (parent, args, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== args.id);
    db.products = db.products.map((product) => {
      if (product.categoryId === args.id) {
        return { ...product, categoryId: null };
      } else {
        return product;
      }
    });
    return true;
  },

  deleteProduct: (parent, args, { db }) => {
    db.products = db.products.filter((product) => args.id !== product.id);
    db.reviews = db.products.filter((review) => review.productId !== args.id);
    return true;
  },

  deleteReview: (parent, args, { db }) => {
    db.reviews = db.reviews.filter((review) => args.id !== review.id);
  },

  updateCategory: (parent, args, { db }) => {
    const index = db.categories.findIndex(
      (category) => category.id === args.id
    );
    if (index === -1) return null;
    db.categories[index] = { ...db.categories[index], ...args.input };
    return db.categories[index];
  },
  updateProduct: (parent, args, { db }) => {
    const index = db.products.findIndex((product) => product.id === args.id);
    if (index === -1) return null;

    db.products[index] = { ...db.products[index], ...args.input };
    return db.products[index];
  },
  updateReview: (parent, args, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === args.id);
    if (index === -1) return null;

    db.reviews[index] = { ...db.reviews[index], ...args.input };
    return db.reviews[index];
  },
};
