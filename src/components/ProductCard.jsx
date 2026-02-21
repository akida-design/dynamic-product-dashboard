import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const cardClass = product.inStock
    ? styles.card
    : `${styles.card} ${styles.outOfStock} outOfStockClass`;

  return (
    <div className={cardClass}>
      <h2>{product.name}</h2>
      <p>Price: {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}</p>
      <p className={product.inStock ? styles.inStock : styles.out}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      {/* Remove button intentionally omitted per user request */}
    </div>
  );
};

export default ProductCard;
