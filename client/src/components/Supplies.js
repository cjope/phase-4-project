import { useEffect, useState } from "react";

function Supplies({ user }) {
  const [supplies, setSupplies] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/supplies")
      .then((r) => r.json())
      .then((item) => setSupplies(item));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setItem(e.target.value);
    fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: item,
        user_id: user.id,
      }),
    });
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
