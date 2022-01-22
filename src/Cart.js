import Card from "./Card";

export default function Cart({ cartItems, addToCart }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="columns is-multiline">
        {cartItems.map((data) => (
          <div
            className="column is-one-third is-flex is-justify-content-space-around"
            key={data.id}
          >
            <Card data={data} key={data.id} addToCart={addToCart} />
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <button
          className="checkout"
          style={{
            width: "85%",
            height: "50px",
            backgroundColor: "rgb(252, 123, 36)",
            fontSize: "20px"
          }}
          onClick={() => alert("Checkout procedure")}
        >
          CHECKOUT
        </button>
      )}
    </div>
  );
}
