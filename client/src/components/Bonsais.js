import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Bonsais() {
  const [plants, setPlants] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/plants")
      .then((r) => r.json())
      .then((item) => setPlants(item));
  }, []);

  function handleSubmit(e) {
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

  const listPlants = plants.map((plant) => (
    <div className="product" key={plant.id}>
      <img src={plant.img_url} alt="profile-pic"></img>
      <h2>{plant.name}</h2>
      <h2>${plant.price}</h2>
      {/* add inCart? maybe */}
      <button
        className="add-cart"
        value={plant.id}
        onClick={(e) => handleSubmit(e)}
      >
        Add to Cart
      </button>
    </div>
  ));

  return <div className="shop">{listPlants} </div>;
}
export default Bonsais;
