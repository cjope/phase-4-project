import { useState } from "react";
function User() {
  const [user, setUser] = useState("");

  return (
    <div>
      {user.id ? (
        <div className="user">
          <img
            className="profile-pic"
            src={user.profile_img}
            alt={user.name}
          ></img>
          <h3>{user.username}</h3>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default User;
