import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from "mdb-react-ui-kit";

export default function Card({ data }) {
  // console.log(data);

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
            <button style={{ width: "170px" }} className="btn btn-primary">
              ADD TO CART
            </button>
          </center>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
