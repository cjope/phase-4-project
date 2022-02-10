import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Supplies() {
  const [supplies, setSupplies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/supplies")
      .then((r) => r.json())
      .then((item) => setSupplies(item));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: e.target.value,
      }),
    });
    history.push("/cart");
  }

  const listSupplies = supplies.map((supply) => (
    <div className="product" key={supply.id}>
      <img src={supply.img_url} alt="product"></img>
      <h1>{supply.name}</h1>
      <h1>${supply.price}</h1>
      <button
        className="add-cart"
        value={supply.id}
        onClick={(e) => handleSubmit(e)}
      >
        Add to Cart
      </button>
    </div>
  ));

  return <div className="shop">{listSupplies}</div>;
}
export default Supplies;
