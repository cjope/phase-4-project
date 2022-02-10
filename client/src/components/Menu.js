import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  return (
    <div className="menu">
      <div className="m-left">
        <>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => history.push("/")}
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
    </div>
  );
}

export default Menu;
