import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

export default function Card({ data }) {
  const [buttonValue, setButtonValue] = React.useState(true);
  const [count, setCount] = React.useState(1);
  const [cartcount, setCartcount] = React.useState(0);

  // React.useEffect(() => {
  //   if (buttonValue === true) {
  //     setCartcount(cartcount + 1);
  //   }
  //   console.log(cartcount);
  // });

  function Add() {
    setCount(count + 1);
  }

  function Substract() {
    if (count === 1) {
      setButtonValue(true);
    } else {
      setCount(count - 1);
    }
  }

  function ChangingButton() {
    return (
      <div className="inside-cart-button">
        <button onClick={Substract} className="substraction">
          -
        </button>
        <h5 className="number">
          <Quantity />
        </h5>
        <button onClick={Add} className="addition">
          +
        </button>
      </div>
    );
  }

  const boolean = () => {
    setButtonValue(false);
  };
  function Button() {
    return (
      <div>
        <button
          onClick={boolean}
          style={{ width: "170px" }}
          className="btn btn-primary {buttonValue}"
        >
          ADD TO CART
        </button>
      </div>
    );
  }

  function Quantity() {
    return (
      <p style={{ color: "rgb(95, 95, 95)" }}>
        {" "}
        <span style={{ paddingRight: "6px" }}>{count}</span>
        {data.quantity_type.name}
      </p>
    );
  }
  function Price() {
    const amount = data.price;
    return (
      <div>
        <h2 style={{ color: "rgb(95, 95, 95)" }}>${amount * count}</h2>
      </div>
    );
  }

  return (
    <div>
      <MDBCard
        style={{
          maxWidth: "13rem",
          minHeight: "25rem",
          padding: "5px"
        }}
      >
        <MDBCardImage
          style={{ maxWidth: "13rem", minHeight: "10rem" }}
          src={data.image[0].url}
          position="top"
          alt="Fissure in Sandstone"
        />
        <MDBCardBody>
          <h3 style={{ color: "rgb(95, 95, 95)" }}>{data.name}</h3>
          {buttonValue ? <Quantity /> : <p style={{ color: "white" }}>price</p>}
          <Price />
          <center>
            <div>{buttonValue ? <Button /> : <ChangingButton />}</div>
          </center>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
