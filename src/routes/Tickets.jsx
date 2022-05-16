import { Link } from "react-router-dom";

export default function Step1(props) {
  return (
    <section id="tickets" className="steps">
      <div className="heading-wrapper">
        <h1>Step 1</h1>
        <p>Please pick a ticket</p>
      </div>
      <article>
        <div className="regular"></div>
        <div className="vip"></div>
      </article>
      <Link to="/booking/camping-spots">Next</Link>
    </section>
  );
}
