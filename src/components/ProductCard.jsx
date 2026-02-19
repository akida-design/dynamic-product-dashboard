import styles from "../styles/ProductCard.module.css"
import { Card, CardContent, Typography, Chip } from "@mui/material"

export default function ProductCard({ product }) {
    const { name, price, inStock } = product;

    return (
        <>
            <Card className={inStock ? styles.card : `${styles.card} ${styles.outOfStock}`}>
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>{name}</Typography>
                    <Typography variant="body2" color="textSecondary">Price: KES {price.toFixed(2)}</Typography>

                    <div className={styles.row}>
                        <Chip label={inStock ? "In stock" : "Out of stock"} color={inStock ? "success" : "default"} size="small" />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}