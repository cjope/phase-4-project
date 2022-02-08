import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";

function CartFloating({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div stlye={{}}>
      <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
        Cart
      </Button>

      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{user ? `${user?.username}'s cart` : ``}</DialogTitle>
        <DialogContent>
          <Cart user={user}></Cart>
        </DialogContent>
        {user ? (
          <DialogActions>
            <Button onClick={handleToClose} color="primary" autoFocus>
              Continue Shopping
            </Button>
            <Button color="primary" autoFocus primary="true">
              Checkout
            </Button>
          </DialogActions>
        ) : (
          <DialogActions>
            <Button onClick={handleToClose} color="primary" autofocus>
              Close
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default CartFloating;
