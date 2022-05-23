import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function GoGreen({ green }) {
  const { basket, setBasket } = useContext(BasketContext);

  // onclick set "added" to true and display info in basket
  // add remove function that sets "added" to false and automatically removes from basket

  function toggleGreen() {
    // fra burgermenu: setMenuOpen((old) => !old);
  }
  return (
    <div>
      <p>{green.type}</p>
      <p>{green.price}</p>
      <button onClick={toggleGreen}>+</button>
    </div>
  );
}
