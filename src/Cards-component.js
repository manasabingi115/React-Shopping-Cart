import React from "react";
import Card from "./Card";

export default function CardsComponent({ data }) {
  return (
    <div>
      <div className="row">
        {data.map((data, index) => (
          <div className="col-md-5" key={index}>
            {/* {console.log(data)} */}
            <Card data={data} />
          </div>
        ))}
      </div>
      {/* <div>HI</div> */}
    </div>
  );
}
// const names = {data.category.name}
// {names.filter(name => name.includes('J')).map(filteredName => (
//   <li>
//     {filteredName}
//   </li>
// ))}
