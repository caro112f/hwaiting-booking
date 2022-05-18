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
    <div
      className="ticket"
      style={
        props.ticket.id === 1
          ? { border: "5px solid #20E3E3", boxShadow: "0px 0px 22px #5AFFFF" }
          : { border: "5px solid #FB3CFF", boxShadow: "0px 0px 22px #FC61FF" }
      }
    >
      <h3>{props.ticket.type} ticket</h3>
      <p>{props.ticket.price} DKK</p>
      <div className="buy-ticket-wrapper">
        <button
          onClick={buy}
          className="buy-ticket"
          style={
            props.ticket.id === 1
              ? {
                  border: "4px solid #20E3E3",
                  boxShadow: "0px 0px 22px #5AFFFF",
                }
              : {
                  border: "4px solid #FB3CFF",
                  boxShadow: "0px 0px 22px #FC61FF",
                }
          }
        >
          Buy ticket
        </button>
      </div>
    </div>
  );
}
