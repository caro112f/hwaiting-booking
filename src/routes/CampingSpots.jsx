import { Link } from "react-router-dom";
import Basket from "../components/Basket";

import Spot from "../components/Spot";

export default function Step2(props) {
  let campPrice = props.dataCamping.map(({ price, ...rest }) => {
    return price;
  });

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

      {/* on click event send put request  */}
      <div className="next-step">
        <Link to="/booking/additional">Next</Link>
      </div>
    </section>
  );
}
