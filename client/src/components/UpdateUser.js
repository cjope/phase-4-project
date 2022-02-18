import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function UpdateUser({ setUser }) {
  const [updateName, setUpdateName] = useState("");
  const [updateImg, setUpdateImg] = useState("");
  const history = useHistory();

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

  function deleteUser() {
    fetch("/delete", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    history.push("/");
  }

  return (
    <div className="update-user">
      <div>
        <label>Update UserName</label>
        <form name="username" onSubmit={updateUsername}>
          <br />
          <input
            placeholder="Enter New Username"
            onChange={(e) => setUpdateName(e.target.value)}
          ></input>
          <br />
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <div>
        <label>Update Profile Picture</label>
        <form name="username" onSubmit={updateImgURL}>
          <input
            placeholder="Enter New Image URL"
            onChange={(e) => setUpdateImg(e.target.value)}
          ></input>
          <br />
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Button variant="outlined" color="secondary" onClick={deleteUser}>
        Delete User
      </Button>
    </div>
  );
}
export default UpdateUser;
