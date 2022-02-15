import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Logout({ setUser }) {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    history.go();
  };

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    handleToClose();
  }

  return (
    <div stlye={{}}>
      <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
        Logout
      </Button>

      <Dialog open={open} onClose={handleToClose} onSubmit={handleLogout}>
        <DialogTitle>{"Are you sure?"}</DialogTitle>

        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            No
          </Button>
          <Button
            onClick={handleLogout}
            color="primary"
            autoFocus
            primary="true"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Logout;
