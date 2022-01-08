import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from "mdb-react-ui-kit";

export default function Card({data}) {
  return (
    <div>
      <div className="row">
        {data.map((data,index) =>(
          <div className="col-md-5" key={index} >
          <MDBCard style={{ maxWidth: "13rem", minHeight: "25rem", background:"red" }}>
            <MDBCardImage style={{ maxWidth: "10rem", minHeight: "10rem" }}
              src={data.image.url}  
              position="top"
              alt="Fissure in Sandstone"
            />
            <MDBCardBody>
              <h3>
                {data.name}
              </h3>
              <MDBCardText>
                {data.quantity_type.name}
              </MDBCardText>
              <h2>${data.price}</h2>
              <button className="btn btn-primary">Buy</button>
            </MDBCardBody>
          </MDBCard>
        </div>
        ))}        
      </div>
  <div>HI</div>
  </div>
  );
}
