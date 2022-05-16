import { Link } from "react-router-dom";

export default function Step4(props) {
  return (
    <section>
      <div className="heading-wrapper">
        <h1>Step 4</h1>
        <p>Guest information</p>
      </div>
      <Link to="/booking/payment">Next</Link>
    </section>
  );
}
