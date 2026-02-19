import React, { useState } from "react"
import ProductList from "./components/ProductsList"
import { Container, Box, Button, ButtonGroup, Typography } from "@mui/material"

export default function App() {
  const products = [
    { id: 1, name:"Wireless Mouse", price: 3000, inStock: true },
    { id: 2, name:"Touch Keyboard", price: 40000, inStock: false },
    { id: 3, name:"Charger head USB-C", price: 1500, inStock: true },
    { id: 4, name:"27inch Monitor", price: 35000, inStock: false },
    { id: 5, name:"Wireless Mouse", price: 3000, inStock: true },
    { id: 6, name:"Touch Keyboard", price: 40000, inStock: false },
    { id: 7, name:"Charger head USB-C", price: 1500, inStock: true },
    { id: 8, name:"27inch Monitor", price: 35000, inStock: false },
    { id: 9, name:"Wireless Mouse", price: 3000, inStock: true },
    { id: 10, name:"Touch Keyboard", price: 40000, inStock: false },
    { id: 11, name:"Charger head USB-C", price: 1500, inStock: true },
    { id: 12, name:"27inch Monitor", price: 35000, inStock: false },
    { id: 13, name:"Wireless Mouse", price: 3000, inStock: true },
    { id: 14, name:"Touch Keyboard", price: 40000, inStock: false },
    { id: 15, name:"Charger head USB-C", price: 1500, inStock: true },
    { id: 16, name:"27inch Monitor", price: 35000, inStock: false },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (filter === "inStock") return p.inStock;
    if (filter === "outOfStock") return !p.inStock;
    return true;
  });

  return (
    <Container maxWidth="md" sx={{py: 4}}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Product Dashboard</Typography>
        <ButtonGroup variant="outlined" aria-label="product filter">
          <Button onClick={() => setFilter("all")} color={filter === "all" ? "primary" : "inherit"}>All</Button>
          <Button onClick={() => setFilter("inStock")} color={filter === "inStock" ? "primary" : "inherit"}>In Stock</Button>
          <Button onClick={() => setFilter("outOfStock")} color={filter === "outOfStock" ? "primary" : "inherit"}>Out of Stock</Button>
        </ButtonGroup>
      </Box>
      <ProductList products={filteredProducts} originalProducts={products} />
    </Container>
  );
}