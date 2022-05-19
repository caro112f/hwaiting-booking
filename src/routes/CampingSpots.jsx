import { Link } from "react-router-dom";

import Spot from "../components/Spot";

export default function Step2(props) {
  return (
    <section className="steps">
      <div className="heading-wrapper">
        <h1>Step 2</h1>
        <p>Please pick a camping spot </p>
      </div>
      <article className="map">
        <div className="ticket-wrapper">
          {props.dataCamping.map((s) => (
            <Spot
              key={s.available}
              dataCamping={s}
              bookingfee={props.bookingfee}
            />
          ))}
        </div>
      </article>

      <div className="next-step">
        <Link to="/booking/additional">Next</Link>
      </div>
    </section>
  );
}
