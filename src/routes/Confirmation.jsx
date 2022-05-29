import { useContext } from "react";
import { BasketContext } from "../contexts/basket";
import { Link } from "react-router-dom";

import BICampingSpots from "../components/BICampingSpots";
//import BITicket from "../components/BITicket";
//import BITents from "../components/BITents";
import BIGoGreen from "../components/BIGoGreen";
import TicketReceipt from "../components/TicketReceipt";
import TentsReceipt from "../components/TentsReceipt";

export default function Confirmation(
  {
    dataCamping,
    ticketData,
    ticketNo,
    setTicketNo,
    ticketsinBasketNo,
    gogreen,
    fullAmountOfPers,
    reservationData,
    freezeTickets,
    fullPrice,
    setFreezeTickets,
    ticketAmount,
  },
  props
) {
  const { basket } = useContext(BasketContext);
  console.log(fullPrice);
  return (
    <section id="confirmation">
      <div id="confirmation-wrapper">
        <div className="heading-wrapper">
          <h1>Congratulations</h1>
          <p>
            Your order is complete and the receipt will be sent to your email
            shortly
          </p>
        </div>
        <div id="background-color">
          <h3>Your order: </h3>
          <ul>
            {basket.tickets.map((ticket) => {
              return (
                <TicketReceipt
                  key={ticket.id}
                  ticketData={ticketData}
                  {...ticket}
                ></TicketReceipt>
              );
            })}
            {basket.campingSpot.map((spot) => {
              return (
                <BICampingSpots key={spot.area} {...spot}></BICampingSpots>
              );
            })}
            {basket.tentsBA.map((add) => {
              return <TentsReceipt key={add.id} {...add}></TentsReceipt>;
            })}
            {basket.gogreenBA.added ? (
              <BIGoGreen green={gogreen} key={gogreen.type}></BIGoGreen>
            ) : (
              <></>
            )}
          </ul>
          <hr />
          <div className="totalprice">
            <p>Total:</p>
            <p className="basket-price"> {fullPrice} DKK</p>
          </div>
        </div>
        <div className="next-step">
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
