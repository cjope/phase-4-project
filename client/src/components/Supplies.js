import { useEffect, useState } from "react";
import Cart from "./Cart";

function Supplies({ user }) {
  const [supplies, setSupplies] = useState([]);
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("/supplies")
      .then((r) => r.json())
      .then((item) => setSupplies(item));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setProduct(e.target.value);
    handleSubmit2();
  }

  console.log(product);

  async function handleSubmit2() {
    const response = await fetch("/checkout", {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        item_id: product,
      }),
    });
  }

  const listSupplies = supplies.map((item) => (
    <div className="product" key={item.id}>
      <img src={item.img_url} alt="profile-pic"></img>
      <h1>{item.id}</h1>
      <h1>{item.name}</h1>
      <h1>${item.price}</h1>
      <button
        className="add-cart"
        value={item.id}
        onClick={(e) => handleSubmit(e)}
      >
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="supplies">
      <form onSubmit={handleSubmit}>
        <button type="submit">Add to Cart</button>
      </form>
      <div className="supply-side">{listSupplies}</div>
      <div className="cart-side">{/* <Cart user={user} /> */}</div>
    </div>
  );
}
export default Supplies;
