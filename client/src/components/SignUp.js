import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const history = useHistory();

  function handleSignUp(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        img_url: profilePic,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    history.push("/");
  }

  return (
    <div>
      <form className="submit" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <br />
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <label>Profile Pic</label>
        <input
          type="text"
          id="img_url"
          value={profilePic}
          placeholder="paste image url..."
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <br />
        <button className="sub-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
