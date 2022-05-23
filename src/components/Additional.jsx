import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Additional(props) {
  const { basket, setBasket } = useContext(BasketContext);

  function choose() {
    console.log("clicked");

    if (basket.additionalsBA.find((add) => add.id === props.add.id)) {
      setBasket((old) => {
        const mapped = old.additionalsBA.map((add) => {
          if (add.id === props.add.id) {
            const copy = { ...add };

            copy.amount++;

            return copy;
          }

          return add;
        });
        return { ...old, additionalsBA: mapped };
      });
    } else {
      // setBasket((oldState) => [...oldState, { ...props.ticket, amount: 1 }]);
      setBasket((oldState) => ({
        ...oldState,
        additionalsBA: [...oldState.additionalsBA, { ...props.add, amount: 1 }],
      }));
    }
  }

  return (
    <div>
      <p>{props.add.type}</p>
      <p>{props.add.price}</p>
      <button onClick={choose}>+</button>
    </div>
  );
}
