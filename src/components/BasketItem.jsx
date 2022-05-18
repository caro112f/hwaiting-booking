import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function BasketItem({ id, amount, type, price }) {
  const { setBasket } = useContext(BasketContext);

  //const { setBasket } = useContext(BasketContext);

  function remove(id) {
    setBasket((old) => {
      const mapped = old.map((ticket) => {
        if (ticket.id === id) {
          const copy = { ...ticket };
          copy.amount = copy.amount - 1;
          return copy;
        }
        return ticket;
      });

      return mapped.filter((ticket) => ticket.amount > 0);
    });
  }

  function buymore(id) {
    setBasket((old) => {
      const mapped = old.map((ticket) => {
        if (ticket.id === id) {
          const copy = { ...ticket };
          copy.amount = copy.amount + 1;
          return copy;
        }
        return ticket;
      });

      return mapped.filter((ticket) => ticket.amount > 0);
    });
  }

  return (
    <li className="basket-list" key={id}>
      <div className="amount-wrapper">
        <span onClick={() => remove(id)}>
          <p>-</p>
        </span>
        <p>{amount} </p>
        <span onClick={() => buymore(id)}>
          <p>+</p>
        </span>{" "}
      </div>
      <p className="basket-font">
        {" "}
        {type} {price} DKK{" "}
      </p>
    </li>
  );
}
