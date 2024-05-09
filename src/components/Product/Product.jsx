import styles from "./Product.module.css";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvaider";

const Product = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[product.id];

  return (
    <div className={styles.product}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.productContent}>
        <div className={styles.productDescription}>
          <p className={styles.title}>
            <b>{product.title}</b>
          </p>
          <p className={styles.price}>$ {product.price}</p>
        </div>
        <Button
          className={styles.productButton}
          onClick={() => addToCart(product.id)}
          color="danger"
        >
          Buy {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </Button>
      </div>
    </div>
  );
};

export default Product;
