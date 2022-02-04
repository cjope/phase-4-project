import { useEffect, useState } from "react";
import Cart from "./Cart";

function Supplies() {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    fetch("/supplies")
      .then((r) => r.json())
      .then((item) => setSupplies(item));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("/checkout");
    //fetch update cart
  }

  const listSupplies = supplies.map((item) => (
    <div className="product" key={item.id}>
      <img src={item.img_url} alt="profile-pic"></img>
      <h1>{item.name}</h1>
      <h1>${item.price}</h1>
      <button className="add-cart" value={item.id} onClick={handleSubmit}>
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="supplies">
      <div className="supply-side">{listSupplies}</div>
      <div className="cart-side">{/* <Cart /> */}CART</div>
    </div>
  );
}
export default Supplies;
