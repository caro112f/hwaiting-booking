import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function BITicket({ id, amount, type, price }) {
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
      <div className="amount-type-wrapper">
        <div className="amount-wrapper">
          <button className="basket-minus" onClick={() => remove(id)}>
            <p>-</p>
          </button>
          <p>{amount} </p>
          <button className="basket-plus" onClick={() => buymore(id)}>
            <p>+</p>
          </button>{" "}
        </div>

        <div className="type-wrapper">
          <p className="basket-font"> {type} </p>
        </div>
      </div>
      <div className="price-wrapper">
        <p className="basket-font"> {price} DKK </p>
      </div>
    </li>
  );
}
