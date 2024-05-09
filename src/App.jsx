import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ShopContextProvaider from "./context/ShopContextProvaider";

const App = () => {
  return (
    <>
      <ShopContextProvaider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </ShopContextProvaider>
    </>
  );
};

export default App;
