import { Select } from "@material-ui/core";
import { useState } from "react";

function UpdateUser() {
  const [updateName, setUpdateName] = useState("");
  const [updatePass, setUpdatePass] = useState("");
  const [updatePassConf, setUpdatePassConf] = useState("");
  const [updateImg, setUpdateImg] = useState("");
  const [updateParam, setUpdateParam] = useState("");

  function updateUsername() {
    fetch("/update", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: `${updateName}`,
      }),
    });
  }

  function updatePassword() {
    fetch("/update", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: `${updatePass}`,
        password_confirmation: `${updatePassConf}`,
      }),
    });
  }

  function updateImgURL() {
    fetch("/update", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        img_url: `${updateImg}`,
      }),
    });
  }

  return (
    <div className="update-user">
      {/* <button onClick={(e) => setUpdateParam("username")}>
        Update Username
      </button> */}
      <div>
        <label>Update UserName</label>
        <form name="username" onSubmit={updateUsername}>
          <br />
          <input onChange={(e) => setUpdateName(e.target.value)}></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <label>Update Password</label>
        <form name="username" onSubmit={updatePassword}>
          {/* <div> */}

          <input
            placeholder="New Password"
            onChange={(e) => setUpdatePass(e.target.value)}
          ></input>
          <br />

          <input
            placeholder="Confirm New Password"
            onChange={(e) => setUpdatePassConf(e.target.value)}
          ></input>
          <br />

          <button type="submit">Submit</button>
          {/* </div> */}
        </form>
      </div>
      <div>
        <label>Update Profile Picture</label>
        <form name="username" onSubmit={updateImgURL}>
          <input onChange={(e) => setUpdateImg(e.target.value)}></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateUser;
