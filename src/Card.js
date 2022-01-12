import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from "mdb-react-ui-kit";

export default function Card({ data }) {
  const [buttonValue, setButtonValue] = React.useState("ADD TO CART");

  const manu = () => {
    if (buttonValue === "ADD TO CART") {
      setButtonValue("changing value");
    } else if (buttonValue === "changing value") {
      setButtonValue("ADD TO CART");
    }
  };

  function ChangingButton() {
    return (
      <div>
        <p style={{ width: "10px", height: "10px" }}>-</p>
        <p>
          <span>1</span>
        </p>
        <p>+</p>
      </div>
    );
  }
  // if(changeButton===changing integer)

  return (
    <div>
      <MDBCard
        style={{
          maxWidth: "13rem",
          minHeight: "25rem"
          // background: "red"
        }}
      >
        <MDBCardImage
          style={{ maxWidth: "13rem", minHeight: "10rem" }}
          src={data.image[0].url}
          position="top"
          alt="Fissure in Sandstone"
        />
        <MDBCardBody>
          <h3>{data.name}</h3>
          <MDBCardText>{data.quantity_type.name}</MDBCardText>
          <h2>${data.price}</h2>
          <center>
            <button
              onClick={manu}
              style={{ width: "170px" }}
              className="btn btn-primary"
            >
              {buttonValue}
            </button>
            <ChangingButton />
          </center>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
