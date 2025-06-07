import { useState } from "react";
import Placement from "./components/Placement/Placement";
import Products from "./components/Products/Products";

function App() {
  const [cart , setCart] = useState([]);
  const addToCartData = (product) =>
  {
     const newCart = [... cart ,product];
     setCart(newCart);
  }
  return (
    <div className="flex bg-black">
      <Products addToCartData = {addToCartData}> </Products>
      <Placement cart = {cart} ></Placement>
    </div>
  );
}
export default App;