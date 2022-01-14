import React from "react";
import Card from "./Card";

export default function CardsComponent({ data }) {
  const [filterValue, setFilteredValue] = React.useState("");

  console.log(filterValue);
  let filteredData = data;
  if (filterValue) {
    filteredData = data.filter(
      (element) => element.category.name === filterValue
    );
  }

  // React.useEffect(() => {
  //   const render = () => {
  //     filteredData.map((data, index) => (
  //       <div className="col-md-5">
  //         <Card data={data} key={data.id} />
  //       </div>
  //     ));
  //   };
  // }, [filterValue]);

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
        {filteredData.map((data) => (
          <div className="col-md-5">
            <Card data={data} key={data.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
