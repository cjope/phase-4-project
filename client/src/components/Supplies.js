import { useEffect, useState } from "react";
// import { Grid } from "semantic-ui-react";

function Supplies() {
  const [supplies, setSupplies] = useState([]);

  useEffect(() => {
    fetch("/supplies")
      .then((r) => r.json())
      .then((item) => setSupplies(item));
  }, []);

  const listSupplies = supplies.map((item) => (
    <div className="product" key={item.id}>
      <img src={item.img_url} alt="profile-pic"></img>
      <h1>
        {item.name} - ${item.price}
      </h1>
      <button className="add-cart">Add to Cart</button>
    </div>
  ));

  return <div>{listSupplies}</div>;
}
export default Supplies;
