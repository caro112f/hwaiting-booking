import { useContext } from "react";
import { BasketContext } from "../contexts/basket";
import BICampingSpots from "./BICampingSpots";
import BITicket from "./BITicket";
import Timer from "./Timer";
import BIAdditionals from "./BIAdditionals";

export default function Basket({
  dataCamping,
  ticketData,
  ticketNo,
  setTicketNo,
  ticketsinBasketNo,
}) {
  const { basket } = useContext(BasketContext);

  //getting ticket price
  const initialvalue = 0;
  const ticketSum = basket.tickets.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.amount * currentValue.price,
    initialvalue
  );
  //getting booking price
  const bookingSum = basket.campingSpot.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    initialvalue
  );

  //get full basket price
  let fullPrice = ticketSum + bookingSum;

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
          {basket.additionalsBA.map((add) => {
            return <BIAdditionals key={add.id} {...add}></BIAdditionals>;
          })}
        </ul>
        <hr />
        <div className="totalprice">
          <p>Total:</p>
          <p className="basket-price"> {fullPrice} DKK</p>
        </div>
      </div>
    </article>
  );
}
