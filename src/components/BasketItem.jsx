import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function BasketItem({ id, amount, type, price }) {
  const { setBasket } = useContext(BasketContext);

  function remove(id) {
    //props.setBasket((old) => old.filter((item) => item.id !== id));
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
      //setIsAnimating(true);
    });
  }

  return (
    <li key={id}>
      <p>
        {" "}
        {amount} x {type} ${price}{" "}
      </p>
      <button className="trash" onClick={() => remove(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </button>
    </li>
  );
}
