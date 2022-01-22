import React from "react";
import Card from "./Card";

export default function CardsComponent({ data, addToCart, search }) {
  const [filterValue, setFilteredValue] = React.useState("");

  let filteredData = data;
  if (filterValue) {
    filteredData = data.filter(
      (element) => element.category.name === filterValue
    );
  }
  if (search) {
    filteredData = filteredData.filter((val) =>
      val.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <div className="filter-buttons">
        <button
          onClick={() => setFilteredValue("")}
          className="all"
          type="submit"
          value="search"
        >
          All
        </button>
        <button
          onClick={() => setFilteredValue("vegetable")}
          className="vegetable"
          type="submit"
          value="search"
        >
          Vegetables
        </button>
        <button
          onClick={() => setFilteredValue("fruit")}
          className="fruit"
          type="submit"
          value="search"
        >
          Fruits
        </button>

        <button
          onClick={() => setFilteredValue("nuts")}
          className="nuts"
          type="submit"
          value="search"
        >
          Nuts
        </button>
      </div>
      <br />
      <br />
      <div className="columns is-multiline">
        {filteredData.map((data) => (
          <div
            className="column is-one-third is-flex is-justify-content-space-around"
            key={data.id}
          >
            <Card data={data} key={data.id} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
