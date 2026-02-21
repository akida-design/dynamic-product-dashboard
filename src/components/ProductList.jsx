import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Typography } from '@mui/material';

const ProductList = ({ products = [] }) => {
  if (products.length === 0) {
    return <Typography>No products available.</Typography>;
  }

  const anyInStock = products.some((p) => p.inStock);
  if (!anyInStock) {
    return <Typography>No products in stock.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
