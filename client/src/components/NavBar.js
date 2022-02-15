import { Link, useHistory } from "react-router-dom";
import Menu from "./Menu";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";

function NavBar({ user, setUser }) {
  const history = useHistory();

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
                <Link to="/update-user">
                  <img
                    className="profile-pic"
                    src={user.img_url}
                    alt="profile"
                  ></img>
                </Link>
                <p>Welcome, {user.username}!</p>
                <Logout setUser={setUser} />
                <div></div>
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
