// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import Search from "./Search";

function Menu() {
  return (
    <div className="menu">
      <div className="m-left">
        <>
          <Link to="/cart">Cart</Link>
        </>
      </div>
      <div className="m-right">
        <Search></Search>
      </div>
    </div>
  );
}

export default Menu;
