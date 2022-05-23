import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function GoGreen({ green }) {
  const { basket, setBasket } = useContext(BasketContext);
  console.log(green);

  // onclick set "added" to true and display info in basket
  // add remove function that sets "added" to false and automatically removes from basket

  function toggleGreen(props) {
    // fra burgermenu: setMenuOpen((old) => !old);
    console.log("clicked");

    setBasket((oldState) => ({
      ...oldState,
      gogreenBA: { ...green, added: true },
    }));
  }

  // if (basket.gogreenBA.added === false) {
  //   basket.gogreenBA.added = true;
  //   setBasket((oldState) => ({
  //     ...oldState,
  //     gogreenBA: { ...props.green, amount: 1 },
  //   }));

  // } else {
  //   basket.gogreenBA.added = false;
  //   setBasket((oldState) => ({
  //     ...oldState,
  //     gogreenBA: { ...props.green, amount: 0 },
  //   }));
  // }

  // {
  //   green.added = true;
  //   setBasket((oldState) => ({
  //     ...oldState,
  //     gogreenBA: { ...props.green, amount: 1 },
  //   }));
  //   console.log("if false then", green.added);
  // } else {
  //   green.added = false;
  //   setBasket((oldState) => ({
  //     ...oldState,
  //     gogreenBA: { ...props.green, amount: -1 },
  //   }));
  //   console.log("if true then:", green.added);
  // }

  return (
    <div>
      <p>{green.type}</p>
      <p>{green.price}</p>
      <button onClick={toggleGreen}>+</button>
    </div>
  );
}
