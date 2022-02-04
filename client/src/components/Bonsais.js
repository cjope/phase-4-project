import { useEffect, useState } from "react";

function Bonsais() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants")
      .then((r) => r.json())
      .then((item) => setPlants(item));
  }, []);

  const listPlants = plants.map((plant) => (
    <div className="product" key={plant.id}>
      <img src={plant.img_url} alt="profile-pic"></img>
      <h1>
        {plant.name} - ${plant.price}
      </h1>
      <button>Add to Cart</button>
    </div>
  ));

  return <div>{listPlants}</div>;
}
export default Bonsais;
