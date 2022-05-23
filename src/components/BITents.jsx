export default function BITents({ type, price, amount }) {
  return (
    <li>
      <div className="amount-wrapper">
        <button className="basket-minus">
          <p>-</p>
        </button>
        <p>{amount} </p>
        <button className="basket-plus">
          {" "}
          <p>+</p>
        </button>
      </div>
      <p>{type}</p>
      <p>{price}</p>
    </li>
  );
}
