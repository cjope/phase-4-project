import { Link } from "react-router-dom";
import Search from "./Search";

function Menu() {
  return (
    <div className="menu">
      <div className="m-left">
        <>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/bonsais">Bonsais</Link>
          <Link to="/supplies">Supplies</Link>
        </>
      </div>
      <div className="m-right">
        <Search></Search>
      </div>
    </div>
  );
}

export default Menu;
