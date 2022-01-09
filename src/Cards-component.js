import React from "react";
import Card from "./Card";

export default function CardsComponent({ data }, { value }) {
  function Search({ value }) {
    return (
      <div>
        <div className="row">
          {data
            .filter((data) => data.category.name.includes(value))
            .map((data, index) => (
              <div className="col-md-5" key={index}>
                {console.log(data.category.name)}
                <Card data={data} />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        {data.map((data, index) => (
          <div className="col-md-5" key={index}>
            {value === data.name ? <Search /> : <Card data={data} />}
          </div>
        ))}
      </div>
    </div>
  );
}
