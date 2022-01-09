import React from "react";
import Items from "./Items";

export default function Filters({ data }) {
  return (
    <div>
      <Items data={data} />
    </div>
  );
}
