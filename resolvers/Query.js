exports.Query = {
  hello: () => "dipenjbjjb",
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
    console.log(filteredProducts);
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if ([1, 2, 3, 4, 5].includes(filter.avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sunRating = 0;
          let countRating = 0;
          db.reviews.forEach((review) => {
            if (product.id === review.productId) {
              sunRating += review.rating;
              countRating++;
            }
          });
          const avgProductRating = sunRating / countRating;
          return avgProductRating >= filter.avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, args, { db }) => {
    return db.products.find((product) => product.id === args.id);
  },

  categories: (parent, args, { db }) => {
    return db.categories;
  },

  category: (parent, args, { db }) => {
    return db.categories.find((category) => category.id === args.id);
  },
};
