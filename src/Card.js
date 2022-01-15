import React from "react";

export default function Card({ data, addToCart }) {
  const [buttonValue, setButtonValue] = React.useState(true);
  const [count, setCount] = React.useState(1);

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
    addToCart(data);
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
  //return <div>Something</div>
  return (
    <div className="card ">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={data.image[0].url} alt="image1" />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <div class="media-content">
          <p class="title is-4">{data.name}</p>
          <Price />
          <p class="subtitle is-6">
            {buttonValue ? (
              <Quantity />
            ) : (
              <p style={{ color: "white" }}>price</p>
            )}
          </p>
          <div>{buttonValue ? <Button /> : <ChangingButton />}</div>
        </div>
      </div>

      <div>
        <center></center>
      </div>
    </div>
  );
}
