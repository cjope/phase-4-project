import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { FormLabel, Input } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  function handleSignUp(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password,
        password_confirmation: passwordConfirmation,
        img_url: profilePic,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((data) =>
          toast.error(data.errors, {
            autoClose: 1000,
            hideProgressBar: true,
          })
        );
      }
    });
    history.push("/");
  }

  return (
    <div stlye={{}}>
      <ToastContainer />
      <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
        Signup
      </Button>

      <Dialog open={open} onClose={handleToClose} onSubmit={handleSignUp}>
        <DialogTitle>{"Sign Up"}</DialogTitle>
        <DialogContent>
          <Form>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </Form>
          <Form>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Form>
          <Form>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              id="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            ></Input>
          </Form>
          <Form>
            <FormLabel>Profile Pic URL</FormLabel>
            <Input
              type="text"
              id="profile-pic"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            ></Input>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
          <Button
            onClick={handleSignUp}
            color="primary"
            autoFocus
            primary="true"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUp;
