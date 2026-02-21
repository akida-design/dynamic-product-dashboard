import styles from "../styles/ProductCard.module.css"
import { Card, CardContent, Typography, Chip, Box } from "@mui/material"

export default function ProductCard({ product }) {
    const { name, price, inStock } = product;

    return (
        <Card className={inStock ? styles.card : `${styles.card} ${styles.outOfStock}`}>
            <CardContent className={styles.cardContent}>
                <Typography className={styles.name} variant="h6" component="div" gutterBottom>{name}</Typography>
                <Typography className={styles.price} variant="body2">Price: KES {price.toFixed(2)}</Typography>

                <Box className={styles.row}>
                    <Chip label={inStock ? "In stock" : "Out of stock"} color={inStock ? "success" : "default"} size="small" />
                </Box>
            </CardContent>
        </Card>
    );
}