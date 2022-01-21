import "./styles.css";
import React from "react";
import CardsComponent from "./Cards-component";
import Cart from "./Cart";

export default function App() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);

  const addToCart = (id, count) => {
    const newData = [...data];
    const addedItemId = data.findIndex((el) => el.id === id);
    newData[addedItemId].addedCount = count;
    setData(newData);
    console.log(newData);
  };

  React.useEffect(() => {
    Submit();
  }, []);

  const Submit = (e) => {
    e?.preventDefault();
    fetch(
      "https://res.cloudinary.com/bodevone/raw/upload/v1587201304/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  const cartItems = data.filter((el) => Boolean(el.addedCount));

  return (
    <div className="App container">
      <div className="header">
        <h1
          style={{ color: "green", fontSize: "40px", fontWeight: "bolder" }}
          onClick={() => setShowCart(false)}
        >
          Veggy
        </h1>
        <div>
          <form onSubmit={Submit}>
            <input
              type="text"
              key={data.id}
              value={search}
              className="input"
              placeholder="Search for vegetable, fruit, nuts"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button className="search-button" type="submit" value="search">
              search
            </button>
          </form>
        </div>
        <div className="cart-container" onClick={() => setShowCart(true)}>
          <span className="cart" style={{ color: "white" }}>
            {cartItems.length}
          </span>
          <img
            className="cart-img"
            alt="{value.toString()}"
            src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          ></img>
        </div>
      </div>
      <br />
      {showCart ? (
        <Cart cartItems={cartItems} addToCart={addToCart} />
      ) : (
        <CardsComponent
          data={data}
          key={data.id}
          value={search}
          addToCart={addToCart}
          search={search}
        />
      )}
    </div>
  );
}
