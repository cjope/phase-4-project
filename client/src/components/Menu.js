import { Link } from "react-router-dom";
// import CartFloating from "./CartFloating";
// import Cart from "./Cart";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Menu({ user, setUser }) {
  const history = useHistory();

  return (
    <div className="menu">
      <div className="m-left">
        <>
          {/* <Link to="/">Home</Link>
          <Link to="/bonsais">Bonsais</Link>
          <Link to="/supplies">Supplies</Link> */}
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => history.push("/home")}
          >
            Home
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => history.push("/bonsais")}
          >
            Bonsais
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => history.push("/supplies")}
          >
            Supplies
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => history.push("/cart")}
          >
            Cart
          </Button>
        </>
      </div>
      {/* <div className="m-right"></div> */}
    </div>
  );
}

export default Menu;
