import { products } from "../../products";
import { ShopContext } from "../../context/ShopContextProvaider";
import { useContext } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import CartItem from "./CartItem";
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, setCartItems } =
    useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="carItems">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} product={product} />;
          }
        })}
      </div>
      {getTotalCartAmount() > 0 ? (
        <div className="checkout">
          <p className="totalSum">
            Subtotal: <span>${getTotalCartAmount()}</span>
          </p>
          <Button onClick={() => navigate("/")} color="default" variant="ghost">
            Continue Shopping
          </Button>
          <Tooltip color="default" placement="bottom" content="Empty Trash">
            <Button color="default" variant="ghost">
              <Trash />
            </Button>
          </Tooltip>
        </div>
      ) : (
        <h1 style={{ fontSize: 34 }}>
          <b>😥 Your Cart is Empty</b>
        </h1>
      )}
    </div>
  );
};

export default Cart;
