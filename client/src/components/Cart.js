function Cart({ user }) {
  const listUserItems = user.items.map((item) => (
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

  let sum = user.items.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);

  console.log(Math.round(sum));

  console.log(sum.toFixed(2));

  return (
    <div>
      <h1>{user.username}'s Cart</h1>
      <div className="cart-items">
        {listUserItems}
        <h1
        // className="cart-items"
        >
          Total: ${sum.toFixed(2)}
        </h1>
      </div>
    </div>
  );
}
export default Cart;
