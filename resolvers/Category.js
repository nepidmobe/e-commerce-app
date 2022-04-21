exports.Category = {
  products: (parent, { filter }, { products }) => {
    const catagoryProducts = products.filter(
      (product) => parent.id === product.categoryId
    );
    let filteredCategoryProducts = catagoryProducts;
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => product.onSale
        );
      }
    }
    return filteredCategoryProducts;
  },
};
