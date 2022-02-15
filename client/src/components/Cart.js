import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import "react-toastify/dist/ReactToastify.css";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";

function Cart({ user, setUser }) {
  const [usersItems, setUsersItems] = useState([]);
  const [total, setTotal] = useState(0);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [itemID, setItemID] = useState(0);
  const [itemName, setItemName] = useState("");

  const handleClickToOpen = (e) => {
    e.preventDefault();
    setOpen(true);
    setItemID(e.target.value);
    setItemName(e.target.name);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  useState(() => {
    fetch("/cart")
      .then((r) => r.json())
      .then((cart) => setUsersItems(cart));
    getTotal();
  }, []);

  function handleDelete() {
    fetch(`/remove/${itemID}`, { method: "DELETE" });
    handleToClose();
    setItemID(0);
    setItemName("");
    history.go(0);
  }

  const listUserItems = usersItems?.map((usersItem) => (
    <div className="product" key={usersItem.id}>
      <img src={usersItem.item.img_url} alt="product"></img>
      <h1>{usersItem.item.name}</h1>
      <h1>${usersItem.item.price}</h1>
      <button
        className="add-cart"
        value={usersItem.id}
        name={usersItem.item.name}
        onClick={handleClickToOpen}
      >
        Remove
      </button>
      <Dialog open={open}>
        <DialogTitle>Delete Item</DialogTitle>
        <DialogContent>
          Are you sure you want to remove {itemName} from your cart?
        </DialogContent>

        <Button value={usersItem.id} onClick={handleDelete}>
          Yes
        </Button>
        <Button onClick={handleToClose}>No</Button>
      </Dialog>
    </div>
  ));

  function getTotal() {
    // useState(() => {
    fetch("/total")
      .then((r) => r.json())
      .then((total) => setTotal(total));
    // }, []);
  }

  return (
    <div>
      {user ? (
        <div>
          <div className="shop">{listUserItems}</div>
          <h3 className="total">Total: ${total}</h3>
        </div>
      ) : (
        <div className="log-sign">
          <h3>Please</h3>
          <Login setUser={setUser}></Login>
          <h3>or</h3>
          <SignUp></SignUp>
          <h3>to view cart</h3>
        </div>
      )}
    </div>
  );
}
export default Cart;
