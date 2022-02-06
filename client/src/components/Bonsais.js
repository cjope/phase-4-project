import { useEffect, useState } from "react";

function Bonsais() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants")
      .then((r) => r.json())
      .then((item) => setPlants(item));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    //fetch update cart
  }

  const listPlants = plants?.map((plant) => (
    <div className="product" key={plant?.id}>
      <img src={plant.img_url} alt="profile-pic"></img>
      <h2>{plant.name}</h2>
      <h2>${plant.price}</h2>
      <button className="add-cart" value={plant.id}>
        Add to Cart
      </button>
    </div>
  ));

  return <div>{plants ? <div>{listPlants}</div> : <></>}</div>;
}
export default Bonsais;
