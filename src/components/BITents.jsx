import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function BITents({ type, price, amount, id }) {
  const { setBasket } = useContext(BasketContext);

  function remove(id) {
    setBasket((old) => {
      const mapped = old.tentsBA.map((add) => {
        if (add.id === id) {
          const copy = { ...add };
          copy.amount = copy.amount - 1;
          return copy;
        }
        return add;
      });

      return { ...old, tentsBA: mapped.filter((add) => add.amount > 0) };
    });
  }
  function buymore(id) {
    setBasket((old) => {
      const mapped = old.tentsBA.map((add) => {
        if (add.id === id) {
          const copy = { ...add };
          copy.amount = copy.amount + 1;
          return copy;
        }
        return add;
      });
      return {
        ...old,
        tentsBA: mapped.filter((add) => add.amount > 0),
      };
    });
  }

  return (
    <li className="basket-list">
      <div className="amount-type-wrapper">
        <div className="amount-wrapper">
          <button className="basket-minus" onClick={() => remove(id)}>
            <p>-</p>
          </button>
          <p>{amount} </p>
          <button className="basket-plus" onClick={() => buymore(id)}>
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
