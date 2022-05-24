import { Link } from "react-router-dom";
import { BasketContext } from "../contexts/basket";
import { useContext } from "react";
import Spot from "../components/Spot";

export default function Step2(props) {
  let campPrice = props.dataCamping.map(({ price, ...rest }) => {
    return price;
  });
  const { basket } = useContext(BasketContext);
  console.log(props.ticketsinBasketNo);
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
        {/* on click put reguest, gather basket data on ticket amount and camping choice, send data to a database

      from Jonas slides:
      const payLoad = {
      	  header: "This is awesome",
      	  body: "sure is",
      	};
      	const id = 49;
      	const postData = JSON.stringify(payLoad);

      	fetch(`/endpoint/${id}`, {
      	  method: "put",
      	  headers: {
      	    "Content-Type": "application/json",
      	  },
      	  body: postData,
      	})
      	  .then((res) => res.json())
      	  .then((d) => {
      	    console.log(d);
      	  }); */}

        <Link style={{ display: nextButton() }} to="/booking/additional">
          Next
        </Link>
      </div>
    </section>
  );
}
