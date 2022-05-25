import { Link } from "react-router-dom";
import { BasketContext } from "../contexts/basket";
import { useContext, useEffect } from "react";
import Spot from "../components/Spot";

export default function Step2(props) {
  const { basket } = useContext(BasketContext);

  //console.log(basket.campingSpot);

  let areaInBasket = basket.campingSpot.map(({ area, ...rest }) => {
    return area.toString();
  });

  let areaAsString = areaInBasket.shift();

  console.log(areaAsString);
  console.log(props.ticketsinBasketNo);

  function reserve() {
    console.log("im clicked");
    fetch("https://hwaiting.herokuapp.com/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: areaAsString,
        amount: props.ticketsinBasketNo,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => props.setReservationData(data))
      .catch((err) => console.error(err));
  }

  let campPrice = props.dataCamping.map(({ price, ...rest }) => {
    return price;
  });

  function nextButton() {
    if (props.ticketsinBasketNo === 0 || basket.campingSpot.length === 0) {
      return "none";
    } else {
      return "block";
    }
  }

  return (
    <section id="campingspots" className="steps">
      <div className="heading-wrapper">
        <h1>Step 2</h1>
        <p>Please pick a camping spot </p>
        <p>Booking fee: {campPrice[0]} DKK</p>
      </div>

      <article className="map">
        <div className="campingspots-wrapper">
          <div className="campingspots-container">
            {props.dataCamping.map((s) => (
              <Spot
                ticketsinBasketNo={props.ticketsinBasketNo}
                key={s.area}
                spot={s}
              />
            ))}
          </div>
        </div>
      </article>

      <div className="next-step">
        <Link
          onClick={reserve}
          style={{ display: nextButton() }}
          to="/booking/additional"
        >
          Next
        </Link>
      </div>
    </section>
  );
}
