export default function BITents({ type, price, amount }) {
  return (
    <li className="basket-list">
      <div className="amount-type-wrapper">
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

        <div className="type-wrapper">
          <p className="basket-font">{type}</p>
        </div>
      </div>

      <p className="basket-font">{price}</p>
    </li>
  );
}
