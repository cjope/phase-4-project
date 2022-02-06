import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ user }) {
  const [usersItems, setUsersItems] = useState([]);
  const [total, setTotal] = useState(0);

  useState(() => {
    fetch("/cart")
      .then((r) => r.json())
      .then((cart) => setUsersItems(cart));
  }, [{ usersItems }]);

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/remove/${e.target.value}`, { method: "DELETE" });
  }

  // console.log(usersItems);

  const listUserItems = usersItems?.map((item) => (
    <div className="cart-items" key={item.id}>
      <div className="cart-img-div">
        <img
          className="cart-img"
          src={item.item.img_url}
          alt="profile-pic"
        ></img>
      </div>
      <h1>{item.id}</h1>
      <div className="cart-item">
        <h1>{item.item.name}</h1>
        <h1>${item.item.price}</h1>
      </div>
      <button value={item.id} onClick={handleDelete}>
        X
      </button>
    </div>
  ));

  useState(() => {
    fetch("/total")
      .then((r) => r.json())
      .then((total) => setTotal(total));
  }, [{ usersItems }]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.username}'s Cart</h1>

          <div>
            {listUserItems}
            <h1>Total: ${total}</h1>
          </div>
        </div>
      ) : (
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
