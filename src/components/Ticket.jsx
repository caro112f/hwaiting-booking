import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Ticket(props) {
  const { basket, setBasket } = useContext(BasketContext);

  function buy() {
    if (basket.find((ticket) => ticket.id === props.ticket.id)) {
      console.log("in basket already");

      setBasket((old) =>
        old.map((ticket) => {
          if (ticket.id === props.ticket.id) {
            const copy = { ...ticket };

            copy.amount++;

            return copy;
          }

          return ticket;
        })
      );
    } else {
      setBasket((oldState) => [...oldState, { ...props.ticket, amount: 1 }]);
    }
  }

  return (
    <div className="ticket">
      <h3>{props.ticket.type}</h3>
      <p>{props.ticket.price}</p>
      <button onClick={buy}>Buy ticket</button>
    </div>
  );
}
