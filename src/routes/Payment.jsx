import { Link } from "react-router-dom";

export default function Step5(props) {
  return (
    <section>
      <div className="heading-wrapper">
        <h1>Step 5</h1>
        <p>Card information</p>
      </div>

      <div className="next-step">
        <Link to="/verification">BUY TICKETS</Link>
      </div>
    </section>
  );
}
