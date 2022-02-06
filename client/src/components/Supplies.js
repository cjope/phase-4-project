import { useEffect, useState } from "react";

// function Supplies({ user }) {
//   const [supplies, setSupplies] = useState([]);
//   const [product, setProduct] = useState();

//   useEffect(() => {
//     fetch("/supplies")
//       .then((r) => r.json())
//       .then((item) => setSupplies(item));
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setProduct(e.target.value);
//     handleSubmit2();
//   }

//   // async function handleSubmit2() {
//   //   const response = await fetch("/checkout", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({
//   //       item_id: product,
//   //     }),
//   //   });
//   // }

//   async function handleSubmit2(e) {
//     e.preventDefault();
//     const response = await fetch("/checkout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       console.log("Item added:  ", data);
//     } else {
//       setErrors(data.errors);
//     }
//   }

//   const listSupplies = supplies.map((item) => (
//     <div className="product" key={item.id}>
//       <img src={item.img_url} alt="profile-pic"></img>
//       <h1>{item.name}</h1>
//       <h1>${item.price}</h1>
//       <button
//         className="add-cart"
//         value={item.id}
//         onClick={(e) => handleSubmit(e)}
//       >
//         Add to Cart
//       </button>
//     </div>
//   ));

function Supplies() {
  const [errors, setErrors] = useState([]);
  const [item, setItem] = useState("2");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: item }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((addedItem) => console.log(addedItem));
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  // function handleChange(e) {
  //   const value =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //   setFormData({
  //     ...item,
  //     [e.target.id]: value,
  //   });
  // }

  return (
    <div className="supplies">
      <form onSubmit={handleSubmit}>
        <button type="submit">Add to Cart</button>
      </form>
      {/* <div className="supply-side">{listSupplies}</div> */}
      {/* <div className="cart-side"><Cart />CART</div> */}
    </div>
  );
}
export default Supplies;
