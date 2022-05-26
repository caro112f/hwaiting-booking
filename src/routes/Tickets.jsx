import { Link } from "react-router-dom";

import Ticket from "../components/Ticket";

export default function Step1(props) {
  //console.log(props.dataCamping);
  function freezeTickets() {
    props.setFreezeTickets(true);
  }

  return (
    <section id="tickets" className="steps">
      <div className="heading-wrapper">
        <h1>Step 1</h1>
        <p>Please pick a ticket</p>
      </div>

      <article className="ticket-container">
        <div className="ticket-wrapper">
          {props.ticketData.map((t) => (
            <Ticket
              ticketNo={props.ticketNo}
              dataCamping={props.dataCamping}
              key={t.id}
              ticket={t}
              ticketsinBasketNo={props.ticketsinBasketNo}
            />
          ))}
        </div>
      </article>

      <div className="next-step">
        <Link
          onClick={freezeTickets}
          style={
            props.ticketsinBasketNo > 0
              ? { display: "block" }
              : { display: "none" }
          }
          to="/booking/campingspots"
        >
          Next
        </Link>
        ;
      </div>
    </section>
  );
}
