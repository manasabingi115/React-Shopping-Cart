// import React from "react";
// import CardsComponent from "./Cards-component";
// // import Card from "./Card";
// export default function Filters({ data }) {
//   // const [all, setAll] = React.useState([]);

//   console.log(data);

//   return (
//     <div>
//       <button type="submit" value="search">
//         All
//       </button>
//     </div>
//   );
// }
// {names.filter(name => name.includes('J')).map(filteredName => (
//   <li>
//     {filteredName}
//   </li>
// ))}
import React from "react";
import Card from "./Card";

export default function Filters({ data }) {
  // const names = {data.category.name}
  // const [names, setNames] = React.useState([]);
  // setNames(data.category.name);
  // console.log(data[0].category.name);
  return (
    <div>
      <div className="row">
        {data
          .filter((data) => data.category.name.includes("nuts"))
          .map((data, index) => (
            <div className="col-md-5" key={index}>
              {/* {console.log(data.category.name)} */}
              <Card data={data} />
            </div>
          ))}
      </div>
      {/* <div>HI</div> */}
    </div>
  );
}
