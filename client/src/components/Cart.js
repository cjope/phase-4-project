import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import "react-toastify/dist/ReactToastify.css";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";

function Cart({ user, setUser }) {
  const [usersItems, setUsersItems] = useState([]);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [itemID, setItemID] = useState(0);
  const [itemName, setItemName] = useState("");
  const [total, setTotal] = useState(0);

  const handleClickToOpen = (e) => {
    e.preventDefault();
    setOpen(true);
    setItemID(e.target.value);
    setItemName(e.target.name);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("/cart")
      .then((r) => r.json())
      .then((cart) => setUsersItems(cart));
  }, []);

  useEffect(() => {
    fetch("/total")
      .then((r) => r.json())
      .then((total) => setTotal(total));
  }, []);

  function handleDelete() {
    fetch(`/remove/${itemID}`, { method: "DELETE" });
    handleToClose();
    setItemID(0);
    setItemName("");
    history.go();
  }

  function handleCheckout() {
    fetch(`/checkout`, { method: "DELETE" });
    handleThankYou();
  }

  function handleThankYou() {
    toast.success("Thanks for shopping!", {
      autoClose: 1000,
      hideProgressBar: true,
    });
    setTimeout(() => {
      history.go();
    }, 1000);
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

  // const listUserItems = user?.cart.map((item) => (
  //   <div className="product" key={item.id}>
  //     <img src={item.img_url} alt="product"></img>
  //     <h1>{item.name}</h1>
  //     <h1>${item.price}</h1>
  //     <button
  //       className="add-cart"
  //       value={item.id}
  //       name={item.name}
  //       onClick={handleClickToOpen}
  //     >
  //       Remove
  //     </button>
  //     <Dialog open={open}>
  //       <DialogTitle>Delete Item</DialogTitle>
  //       <DialogContent>
  //         Are you sure you want to remove {item.name} from your cart?
  //       </DialogContent>

  //       <Button value={item.id} onClick={handleDelete}>
  //         Yes
  //       </Button>
  //       <Button onClick={handleToClose}>No</Button>
  //     </Dialog>
  //   </div>
  // ));

  return (
    <div>
      {user ? (
        <div>
          <div className="shop">{listUserItems}</div>
          {user.total === 0 ? (
            <h3 className="total">Cart is Empty</h3>
          ) : (
            // <h3 className="total">Total: ${user.total}</h3>
            <h3 className="total">Total: ${total}</h3>
          )}
          <Button
            variant="outlined"
            color="primary"
            style={{
              borderStyle: "solid",
              borderColor: "green",
              color: "green",
              float: "right",
            }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
          <ToastContainer />
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
