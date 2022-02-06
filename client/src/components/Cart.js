import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Cart({ user }) {
  const [usersItems, setUsersItems] = useState([]);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useState(() => {
    fetch("/cart")
      .then((r) => r.json())
      .then((cart) => setUsersItems(cart));
  }, []);

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/remove/${e.target.value}`, { method: "DELETE" });
    history.go(0);
  }

  const listUserItems = usersItems?.map((usersItem) => (
    <div className="product" key={usersItem.id}>
      <img src={usersItem.item.img_url} alt="product"></img>
      <h1>{usersItem.item.name}</h1>
      <h1>${usersItem.item.price}</h1>
      <button className="add-cart" value={usersItem.id} onClick={handleDelete}>
        Remove
      </button>
    </div>
  ));

  useState(() => {
    fetch("/total")
      .then((r) => r.json())
      .then((total) => setTotal(total));
  }, [usersItems.length]);

  // function handleContinue() {
  //   history.goBack();
  // }

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.username}'s Cart</h1>
          <div className="cart-buttons">
            <button className="add-cart" onClick={(e) => history.goBack()}>
              Continue Shopping
            </button>
            <button className="add-cart" onClick={(e) => history.goBack()}>
              Checkout
            </button>
          </div>

          <div className="shop">{listUserItems}</div>
          <h1 className="total">Total: ${total}</h1>
        </div>
      ) : (
        // This needs some sort of async action. very annoying
        <div>
          <h1>
            Please <Link to="/login">Log in</Link> or{" "}
            <Link to="/signup">Sign up</Link> to veiw Cart
          </h1>
        </div>
      )}
    </div>
  );
}
export default Cart;
