import { useEffect, useState } from "react";

function Bonsais() {
  const [plants, setPlants] = useState([]);
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("/plants")
      .then((r) => r.json())
      .then((item) => setPlants(item));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setProduct(e.target.value);
    handleSubmit2();
  }

  function handleSubmit2() {
    fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: product,
      }),
    });
  }

  const listPlants = plants.map((plant) => (
    <div className="product" key={plant.id}>
      <img src={plant.img_url} alt="profile-pic"></img>
      <h2>{plant.name}</h2>
      <h2>${plant.price}</h2>
      <button
        className="add-cart"
        value={plant.id}
        onClick={(e) => handleSubmit(e)}
      >
        Add to Cart
      </button>
    </div>
  ));

  return <div>{plants ? <div>{listPlants}</div> : <></>}</div>;
}
export default Bonsais;
