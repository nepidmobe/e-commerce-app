exports.Query = {
  hello: () => "dipenjbjjb",
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    return products.find((product) => product.id === args.id);
  },

  categories: () => {
    return categories;
  },

  category: (parent, args, context) => {
    return categories.find((category) => category.id === args.id);
  },
};
