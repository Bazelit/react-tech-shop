import { Button, Input } from "@nextui-org/react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvaider";

const CartItem = ({ product }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img className="productImage" src={product.image} alt={product.title} />
      <div className="description">
        <div className="descriptionText">
          <p>
            <b>{product.title}</b>
          </p>
          <p>$ {product.price}</p>
        </div>
        <div className="countHandler">
          <Button color="primary" onClick={() => removeFromCart(product.id)}>-</Button>
          <div className="priceInput">
            <Input
              onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
              value={cartItems[product.id]}
              type="number"
              placeholder="Count"
            />
          </div>
          <Button color="primary" onClick={() => addToCart(product.id)}>+</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
