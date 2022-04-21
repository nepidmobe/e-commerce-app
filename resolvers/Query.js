exports.Query = {
  hello: () => "dipenjbjjb",
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if ([1, 2, 3, 4, 5].includes(filter.avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sunRating = 0;
          let countRating = 0;
          reviews.forEach((review) => {
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
  product: (parent, args, { products }) => {
    return products.find((product) => product.id === args.id);
  },

  categories: (parent, args, { categories }) => {
    return categories;
  },

  category: (parent, args, { categories }) => {
    return categories.find((category) => category.id === args.id);
  },
};
