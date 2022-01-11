import React from "react";
import Card from "./Card";

export default function CardsComponent({ data }, { value }) {
  const [filterValue, setFilteredValue] = React.useState("");

  console.log(filterValue);
  let filteredData = data;
  if (filterValue) {
    filteredData = data.filter(
      (element) => element.category.name === filterValue
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
      <div className="row">
        {filteredData.map((data, index) => (
          <div className="col-md-5" key={index}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
