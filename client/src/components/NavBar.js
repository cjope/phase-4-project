import { Link } from "react-router-dom";
import Menu from "./Menu";

function NavBar({ user, setUser }) {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
      <>
        <Link to="/" />;
      </>;
    });
  }

  function updateProfilePic() {
    fetch("/update-pic")
      .then((r) => r.json())
      .then((data) => console.log(data.img_url));

    // make this into an Update fetch and route to method
  }

  return (
    <>
      <header className="header">
        <div className="h-mid">
          <Link to="/">
            <img
              src="https://riverbendgardens.com/wp-content/uploads/2020/01/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="h-right">
          <div>
            {user ? (
              <div className="user">
                <img
                  className="profile-pic"
                  src={user.img_url}
                  alt="profile"
                  onClick={updateProfilePic}
                ></img>
                <p>Welcome, {user.username}!</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <>
                <Link to="/signup"> Signup </Link>

                <Link to="/login"> Login </Link>
              </>
            )}
          </div>
          <>
            <Link to="/cart">🛒</Link>
          </>
        </div>
      </header>
      <Menu />
    </>
  );
}

export default NavBar;
