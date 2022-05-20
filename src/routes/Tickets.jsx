import { Link } from "react-router-dom";

import Ticket from "../components/Ticket";

export default function Step1(props) {
  console.log(props.dataCamping);
  return (
    <section id="tickets" className="steps">
      <div className="heading-wrapper">
        <h1>Step 1</h1>
        <p>Please pick a ticket</p>
      </div>

      <article className="ticket-container">
        <div className="ticket-wrapper">
          {props.ticketData.map((t) => (
            <Ticket key={t.id} ticket={t} />
          ))}
        </div>
      </article>

      <div className="next-step">
        <Link to="/booking/campingspots">Next</Link>
      </div>
    </section>
  );
}
