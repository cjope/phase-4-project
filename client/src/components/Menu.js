import Search from "./Search";

function Menu() {
  return (
    <div className="menu">
      <div className="m-left">
        <div>Home</div>
        <div>Plants</div>
        <div>Supplies</div>
      </div>
      <div className="m-right">
        <Search></Search>
      </div>
    </div>
  );
}

export default Menu;
