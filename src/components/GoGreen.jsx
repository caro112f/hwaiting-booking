import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function GoGreen({ green }) {
  const { basket, setBasket } = useContext(BasketContext);
  console.log(green);

  // onclick set "added" to true and display info in basket
  // add remove function that sets "added" to false and automatically removes from basket

  function toggleGreen(props) {
    //console.log("clicked");

    if (
      (green.added === false && basket.gogreenBA.added === undefined) ||
      (green.added === false && basket.gogreenBA.added === false)
    ) {
      setBasket((oldState) => ({
        ...oldState,
        gogreenBA: { ...green, added: true },
      }));
    } else if (basket.gogreenBA.added === true) {
      setBasket((oldState) => ({
        ...oldState,
        gogreenBA: { ...green, added: false },
      }));
    }
  }

  return (
    <div>
      <p>{green.type}</p>
      <p>{green.price}</p>
      <button onClick={toggleGreen}>
        {basket.gogreenBA.added ? "-" : "+"}
      </button>
    </div>
  );
}
