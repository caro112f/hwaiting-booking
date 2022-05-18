import { Link } from "react-router-dom";

import Ticket from "../components/Ticket";

export default function Step1() {
  const tickets = [
    {
      id: 1,
      type: "Regular",
      price: 799,
    },
    {
      id: 2,
      type: "Vip",
      price: 1299,
    },
  ];

  return (
    <section id="tickets" className="steps">
      <div className="heading-wrapper">
        <h1>Step 1</h1>
        <p>Please pick a ticket</p>
      </div>
      <article>
        <div className="ticket-wrapper">
          {tickets.map((t) => (
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
