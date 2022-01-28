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
              <img
                src="https://static.wikia.nocookie.net/spaceballs/images/3/30/Skroob.jpg"
                style={{ width: "50px", borderRadius: "50%" }}
              ></img>
              <p>Welcome, {user.username}!</p>
              <button onClick={handleLogout}>Logout</button>
              <Link to="/cart">🛒</Link>
            </div>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
              <Link to="/cart">Cart</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
