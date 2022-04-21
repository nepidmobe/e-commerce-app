const { products } = require("../db");

exports.Category = {
  products: (parent, args, context) => {
    return products.filter((product) => parent.id === product.categoryId);
  },
};
