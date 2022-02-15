import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Bonsais() {
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = useState("");
  const [plants, setPlants] = useState([]);
  const history = useHistory();

  const handleClickToOpen = (e) => {
    setOpen(true);
    setItemName(e.target.name);
  };

  const handleToClose = () => {
    setOpen(false);
  };

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
    handleClickToOpen(e);
  }

  const handleNavigateCart = (
    <Dialog open={open}>
      <DialogContent>{itemName} added to your cart</DialogContent>
      <DialogActions>
        <Button onClick={(e) => history.push("/cart")}>Go to Cart</Button>
        <Button onClick={handleToClose}>Continue Shopping</Button>
      </DialogActions>
    </Dialog>
  );

  const listPlants = plants.map((plant) => (
    <div className="product" key={plant.id}>
      <img src={plant.img_url} alt="product"></img>
      <h2>{plant.name}</h2>
      <h2>${plant.price}</h2>
      <button
        className="add-cart"
        value={plant.id}
        name={plant.name}
        onClick={(e) => handleSubmit(e)}
      >
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="shop">
      {listPlants} {handleNavigateCart}
    </div>
  );
}
export default Bonsais;
