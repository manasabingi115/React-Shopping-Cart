import "./styles.css";
import React from "react";
// import { GiPoliceBadge } from "react-icons/gi";

export default function App() {
  const [search, setSearch] = React.useState([]);
  return (
    <div className="App">
      {/* <GiPoliceBadge />  */}
      <form>
        <div className="header">
          <h1 style={{ color: "green" }}>Veggy</h1>
          <div>
            <input
              value={search}
              id="input"
              placeholder="Search for vegetables, fruits, nuts"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button>search</button>
          </div>
          <img
            alt="{value.toString()}"
            src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          ></img>
        </div>
      </form>
    </div>
  );
}
