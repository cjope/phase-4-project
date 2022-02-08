import { Link } from "react-router-dom";
import CartFloating from "./CartFloating";

function Menu({ user, setUser }) {
  return (
    <div className="menu">
      <div className="m-left">
        <>
          <Link to="/">Home</Link>
          <Link to="/bonsais">Bonsais</Link>
          <Link to="/supplies">Supplies</Link>
        </>
      </div>
      <div className="m-right"></div>
    </div>
  );
}

export default Menu;
