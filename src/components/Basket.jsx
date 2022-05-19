import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

import BICampingSpots from "./BICampingSpots";
import BITicket from "./BITicket";
import Timer from "./Timer";

export default function Basket({ dataCamping, ticketData, bookingfee }) {
  console.log(bookingfee);
  const { basket } = useContext(BasketContext);

  const initialValue = 0;
  const sumWithInitial = basket.reduce(
    (previousValue, currentValue) =>
      previousValue +
      currentValue.amount * currentValue.price +
      currentValue.bookingfee,
    initialValue
  );

  return (
    <article className="basket">
      <div>
        <Timer></Timer>
        <ul>
          {basket.map((item) => {
            return <BITicket key={item.id} {...item} />;
          })}
          <BICampingSpots
            dataCamping={dataCamping}
            bookingfee={bookingfee}
          ></BICampingSpots>
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
