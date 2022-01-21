import Card from "./Card";

export default function Cart({ cartItems, addToCart }) {
  return (
    <div>
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
    </div>
  );
}
