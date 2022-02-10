import { Link } from "react-router-dom";
import Menu from "./Menu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";

function NavBar({ user, setUser }) {
  const notify = () => toast(`Hello ${user.username}`);

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
                  onClick={notify}
                ></img>
                <p>Welcome, {user.username}!</p>
                <Logout setUser={setUser} />
              </div>
            ) : (
              <div className="log-sign">
                <Login setUser={setUser}></Login>
                <SignUp setUser={setUser}></SignUp>
              </div>
            )}
          </div>
        </div>
      </header>

      <Menu />
    </>
  );
}

export default NavBar;
