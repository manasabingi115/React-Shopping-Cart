import React from "react";

export default function Card({ data, addToCart }) {
  const [cartButton, setCartButton] = React.useState(true);

  function Add() {
    addToCart(data.id, (data.addedCount || 0) + data.quantity);
  }

  function Substract() {
    addToCart(data.id, (data.addedCount || 0) - data.quantity);
    console.log(data.addedCount);
    if (data.addedCount === 0) {
      setCartButton(true);
    } else {
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

  const itemQuantity = () => {
    setCartButton(false);
    addToCart(data.id, data.addedCount || data.quantity);
  };
  function Button() {
    return (
      <div>
        <button
          onClick={itemQuantity}
          style={{ width: "170px" }}
          className="btn btn-primary "
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
        <span style={{ paddingRight: "6px" }}>
          {data.addedCount || data.quantity}
        </span>
        {data.quantity_type.name}
      </p>
    );
  }
  function Price() {
    const amount = data.price;
    return (
      <div>
        <h2
          style={{
            color: "rgb(95, 95, 95)",
            fontSize: "25px",
            fontWeight: "bold"
          }}
        >
          ${amount * (data.addedCount || data.quantity)}
        </h2>
      </div>
    );
  }
  return (
    <div className="card ">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={data.image[0].url} className="item-image" alt="image1" />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <div className="media-content">
          <p className="title is-4">{data.name}</p>
          <Price />
          <br />
          <h4 className="subtitle is-6">
            {cartButton ? (
              <Quantity />
            ) : (
              <p style={{ color: "white" }}>price</p>
            )}
          </h4>
          {<div>{data.addedCount ? <ChangingButton /> : <Button />}</div>}
        </div>
      </div>
    </div>
  );
}
