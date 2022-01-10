import React from "react";
import Card from "./Card";

export default function Items({ data }) {
  function Nuts({ data }) {
    return (
      <div>
        Hello
        {/* <div className="row">
          {data
            .filter((data) => data.category.name.includes("nuts"))
            .map((data, index) => (
              <div className="col-md-5" key={index}>
                {console.log(data.category.name)}
                <Card data={data} />
              </div>
            ))}
        </div> */}
      </div>
    );
  }

  function Vegetables({ data }) {
    return (
      <div>
        <div className="row">
          {data
            .filter((data) => data.category.name.includes("vegetable"))
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

  function Fruits({ data }) {
    return (
      <div>
        <div className="row">
          {data
            .filter((data) => data.category.name.includes("fruit"))
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
      <Nuts data={data} />
    </div>
  );
}

const shoot = () => {
  alert("Great Shot!");
  console.log("nuts");
};
