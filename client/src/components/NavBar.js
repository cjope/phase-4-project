import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="header">
      <div className="h-mid">
        <img
          className="logo"
          src="https://riverbendgardens.com/wp-content/uploads/2020/01/logo.png"
          alt="logo"
        ></img>
      </div>
      <div className="h-right">
        <div>
          {user ? (
            <div className="user">
              <img className="profile-pic" src={user.img_url}></img>
              <p>Welcome, {user.username}!</p>
              <button onClick={handleLogout}>Logout</button>
              <Link to="/cart">🛒</Link>
            </div>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
