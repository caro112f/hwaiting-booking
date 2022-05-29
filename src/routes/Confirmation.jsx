import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

import BICampingSpots from "../components/BICampingSpots";
import BITicket from "../components/BITicket";
import BITents from "../components/BITents";
import BIGoGreen from "../components/BIGoGreen";

export default function Confirmation({
  dataCamping,
  ticketData,
  ticketNo,
  setTicketNo,
  ticketsinBasketNo,
  gogreen,
  fullAmountOfPers,
  reservationData,
  freezeTickets,
}) {
  const { basket, setBasket } = useContext(BasketContext);
  return (
    <div>
      <h1>Congratulations</h1>
      <div>
        <ul>
          {basket.tickets.map((ticket) => {
            return (
              <BITicket
                ticketsinBasketNo={ticketsinBasketNo}
                ticketNo={ticketNo}
                key={ticket.id}
                ticketData={ticketData}
                {...ticket}
                freezeTickets={freezeTickets}
              ></BITicket>
            );
          })}
          {basket.campingSpot.map((spot) => {
            return <BICampingSpots key={spot.area} {...spot}></BICampingSpots>;
          })}
          {basket.tentsBA.map((add) => {
            return <BITents key={add.id} {...add}></BITents>;
          })}
          {basket.gogreenBA.added ? (
            <BIGoGreen green={gogreen} key={gogreen.type}></BIGoGreen>
          ) : (
            <></>
          )}
          {/*    <BIGoGreen green={gogreen} key={gogreen.type}></BIGoGreen> */}
        </ul>
        <hr />
        <div className="totalprice">
          <p>Total:</p>
          {/* <p className="basket-price"> {fullPrice} DKK</p> */}
        </div>
      </div>
    </div>
  );
}
