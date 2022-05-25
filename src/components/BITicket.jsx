import { useContext } from "react";
import { BasketContext } from "../contexts/basket";
//import { useLocation } from "react-router-dom";

export default function BITicket({
  id,
  amount,
  type,
  price,
  ticketNo,
  ticketsinBasketNo,
}) {
  const { setBasket } = useContext(BasketContext);

  //const currentlocation = useLocation();

  function remove(id) {
    setBasket((old) => {
      const mapped = old.tickets.map((ticket) => {
        if (ticket.id === id) {
          const copy = { ...ticket };
          copy.amount = copy.amount - 1;
          return copy;
        }
        return ticket;
      });

      return { ...old, tickets: mapped.filter((ticket) => ticket.amount > 0) };
    });
  }

  function buymore(id) {
    //tjekker om der er flere tickets tilbage
    if (ticketsinBasketNo > ticketNo) {
      alert("0 tickets left");
    } else {
      setBasket((old) => {
        const mapped = old.tickets.map((ticket) => {
          if (ticket.id === id) {
            const copy = { ...ticket };
            copy.amount = copy.amount + 1;
            return copy;
          }
          return ticket;
        });
        return {
          ...old,
          tickets: mapped.filter((ticket) => ticket.amount > 0),
        };
      });
    }
  }

  return (
    <li className="basket-list" key={id}>
      <div className="amount-type-wrapper">
        <div className="amount-wrapper">
          <div
            style={
              window.location.href === "http://localhost:3000/booking"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <button className="basket-minus" onClick={() => remove(id)}>
              <p>-</p>
            </button>
          </div>
          <p>{amount}</p>
          <div
            style={
              window.location.href === "http://localhost:3000/booking"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <button className="basket-plus" onClick={() => buymore(id)}>
              {" "}
              <p>+</p>
            </button>
          </div>
        </div>

        <div className="type-wrapper">
          <p className="basket-font"> {type} </p>
        </div>
      </div>
      <div className="price-wrapper">
        <p className="basket-font"> {price} </p>
      </div>
    </li>
  );
}
