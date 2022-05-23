import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function BIGoGreen({ green }) {
  const { setBasket } = useContext(BasketContext);

  function remove() {
    setBasket((oldState) => ({
      ...oldState,
      gogreenBA: { ...green, added: false },
    }));
  }
  return (
    <li>
      <button className="basket-minus" onClick={remove}>
        <p>-</p>
      </button>
      <p>{green.amount}</p>
      <p>{green.type}</p>
      <p>{green.price}</p>
    </li>
  );
}