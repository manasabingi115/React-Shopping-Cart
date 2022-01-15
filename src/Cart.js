import Card from "./Card";

export default function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      <div className="columns is-multiline">
        {cartItems.map((data) => (
          <div
            className="column is-one-third is-flex is-justify-content-space-around"
            key={data.id}
          >
            <Card data={data} key={data.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
