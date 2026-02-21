import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Stack, Button, Typography } from '@mui/material';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'inStock') return p.inStock;
    if (filter === 'outOfStock') return !p.inStock;
    return true;
  });

  return (
    <Container maxWidth="md" style={{ paddingTop: 24 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Dashboard
      </Typography>

      <Stack direction="row" spacing={2} style={{ marginBottom: 16 }}>
        <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => setFilter('all')}>
          All
        </Button>
        <Button variant={filter === 'inStock' ? 'contained' : 'outlined'} onClick={() => setFilter('inStock')}>
          In Stock
        </Button>
        <Button variant={filter === 'outOfStock' ? 'contained' : 'outlined'} onClick={() => setFilter('outOfStock')}>
          Out of Stock
        </Button>
      </Stack>

      <ProductList products={filteredProducts} />
    </Container>
  );
};

export default App;
