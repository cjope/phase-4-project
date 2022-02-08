import React from "react";
import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
// import { FormLabel, Input } from "@material-ui/core";
// import { Form } from "react-bootstrap";
// import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Logout({ setUser }) {
  const [open, setOpen] = React.useState(false);
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const history = useHistory();

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    history.push("/");
  };

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
      <>
        <Link to="/" />;
      </>;
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
