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
      // doesn't work - useHistory doesn't work but should be the solution for this - worked with Horror Review App??
    });
  }

  return (
    <>
      <header className="header">
        <div className="h-mid">
          {/* <img
          className="logo"
          src="https://riverbendgardens.com/wp-content/uploads/2020/01/logo.png"
          alt="logo"
          // onClick={}
        ></img> */}
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
                ></img>
                <p>Welcome, {user.username}!</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
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
