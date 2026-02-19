import React from "react"
import ProductCard from "./ProductCard"
import { Box, Typography } from "@mui/material"

export default function ProductList({ products = [], originalProducts = [] }) {
    const anyInStockInOriginal = originalProducts.some((p) => p.inStock);
    const anyInStockInFiltered = products.some((p) => p.inStock);


    return (
        <>
            {products.length === 0 ? (
                <Typography>No products available</Typography>
            ) : (
                <>
                    {!anyInStockInFiltered && anyInStockInOriginal && (<Typography color="textSecondary" mb={2}>No Products match filter</Typography>)}
                    {!anyInStockInFiltered && (<Typography color="error" mb={2}>All products below are currently out of stock.</Typography>)}
                    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(260px,1fr))" gap={2}>{products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </Box>
                </>
            )
        }
        </>
    );
}