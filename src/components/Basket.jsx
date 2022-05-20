import { useContext } from "react";
import { BasketContext } from "../contexts/basket";
import BICampingSpots from "./BICampingSpots";
import BITicket from "./BITicket";
import Timer from "./Timer";

export default function Basket({
  dataCamping,
  ticketData,
  ticketNo,
  setTicketNo,
  ticketsinBasketNo,
}) {
  const { basket } = useContext(BasketContext);

  const initialValue = 0;
  const sumWithInitial = basket.tickets.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.amount * currentValue.price,
    initialValue
  );

  return (
    <article className="basket">
      <div>
        <Timer></Timer>
        <ul>
          {basket.tickets.map((ticket) => {
            return (
              <BITicket
                ticketsinBasketNo={ticketsinBasketNo}
                ticketNo={ticketNo}
                key={ticket.id}
                ticketData={ticketData}
                {...ticket}
              ></BITicket>
            );
          })}
          {basket.campingSpot.map((spot) => {
            return <BICampingSpots key={spot.area} {...spot}></BICampingSpots>;
          })}
        </ul>
        <hr />
        <div className="totalprice">
          <p>Total:</p>
          <p className="basket-price"> {sumWithInitial} DKK</p>
        </div>
      </div>
    </article>
  );
}
