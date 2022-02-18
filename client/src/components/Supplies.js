import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Supplies() {
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = useState("");
  const [supplies, setSupplies] = useState([]);
  const history = useHistory();

  const handleClickToOpen = (e) => {
    setOpen(true);
    setItemName(e.target.name);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("/supplies")
      .then((r) => r.json())
      .then((item) => setSupplies(item));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    fetch("/add", {
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

  const listSupplies = supplies.map((supply) => (
    <div className="product" key={supply.id}>
      <img src={supply.img_url} alt="product"></img>
      <div>
        <h2>{supply.name}</h2>
        <h2>New</h2>
        <h2>${supply.price}</h2>
      </div>

      <button
        className="add-cart"
        value={supply.id}
        name={supply.name}
        onClick={(e) => handleSubmit(e)}
      >
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="shop">
      {listSupplies} {handleNavigateCart}
    </div>
  );
}
export default Supplies;
