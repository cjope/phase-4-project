import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Cart from "./Cart";
// import Menu from "./Menu";
import "../App.css";
import Supplies from "./Supplies";
import Bonsais from "./Bonsais";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/cart">
          <Cart user={user} />
        </Route>
        <Route path="/supplies">
          <Supplies user={user} />
        </Route>
        <Route path="/bonsais">
          <Bonsais user={user} />
        </Route>
        <Route path="/cart">
          <Cart user={user} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
