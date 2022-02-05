import { useState } from "react";

function Cart({ user }) {
  const [usersItems, setUsersItems] = useState([]);

  const listUserItems = user.items?.map((item) => (
    <div
      // className="cart-items"
      key={item.id}
    >
      <img className="profile-pic" src={item.img_url} alt="profile-pic"></img>
      <h1>
        {item.name} - ${item.price}
      </h1>
    </div>
  ));

  useState(() => {
    fetch("/cart")
      .then((r) => r.json())
      .then((cart) => setUsersItems(cart));
  }, []);

  console.log(user?.items);
  console.log(usersItems);

  console.log(listUserItems?.length == usersItems?.length);

  let sum = user.items?.reduce(function (prev, current) {
    return prev + +current.price.toFixed(2);
  }, 0);

  return (
    <div>
      <h1>{user.username}'s Cart</h1>
      <div className="cart-items">
        {listUserItems}
        <h1>Total: ${sum}</h1>
      </div>
    </div>
  );
}
export default Cart;
