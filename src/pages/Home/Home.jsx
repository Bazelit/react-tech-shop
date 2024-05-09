import styles from "./Home.module.css";
import { products } from "../../products";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
