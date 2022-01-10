import "./styles.css";
import React from "react";
import CardsComponent from "./Cards-component";
import Items from "./Items";
import Card from "./Card";

export default function App() {
  const [search, setSearch] = React.useState([]);
  const [data, setData] = React.useState([]);
  // const [category, setCategory] = React.useState("");

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
  const shoot = (a) => {
    alert(a);
    console.log(a);
  };
  // let aboutCategory = "";
  // if (category === "vegetable") {
  //   aboutCategory = "vegetable";
  // }
  // // else if (category === "nuts") {
  // //   aboutCategory = "nuts";
  // // }
  // else {
  //   aboutCategory = "nuts";
  // }

  const veg = ({ data }) => {
    data
      .filter((data) => data.category.name.includes("vegetable"))
      .map((data, index) => (
        <div className="col-md-5" key={index}>
          {console.log(data)}
          <Card data={data} />
        </div>
      ));
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
              placeholder="Search for vegetables, fruits, nuts"
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
      <div className="filter-buttons">
        <button className="all" type="submit" value="search">
          All
        </button>
        <button
          onClick={() => veg({ data })}
          className="vegetables"
          type="submit"
          value="search"
        >
          Vegetables
        </button>
        <button className="fruits" type="submit" value="search">
          Fruits
        </button>

        <button
          onClick={() => shoot({ data })}
          className="nuts"
          type="submit"
          value="search"
        >
          Nuts
        </button>
      </div>
      <br />
      <br />
      {/* <CardsComponent data={data} key={data.id} value={search} /> */}
      <Items data={data} />
    </div>
  );
}
