import "./styles.css";
import React from "react";
import CardsComponent from "./Cards-component";

export default function App() {
  const [search, setSearch] = React.useState([]);
  const [data, setData] = React.useState([]);

  const Submit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(search);

    return fetch(
      "https://res.cloudinary.com/bodevone/raw/upload/v1587201304/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <h1 style={{ color: "green" }}>Veggy</h1>
        <div>
          <form onSubmit={Submit}>
            <input
              type="text"
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
        <div className="cart-container">
          <div className="cart" style={{ color: "white" }}>
            0
          </div>
          <img
            className="cart-img"
            alt="{value.toString()}"
            src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          ></img>
        </div>
      </div>
      <CardsComponent data={data} key={data.id} value={search} />
    </div>
  );
}
