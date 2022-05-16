import { Link } from "react-router-dom";
import backgroundimage from "../images/background-filter.webp";

export default function Home(props) {
  return (
    <section id="home">
      <section
        id="background"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <div>
          <h1>HWAITING</h1>
          <p>Scandinavias biggest K-pop festival</p>
        </div>
        <Link to="/booking">
          <button>
            <p className="link-p">BUY TICKETS</p>
          </button>
        </Link>
      </section>
      <section id="highlights">
        <h2>2021 highlights</h2>
      </section>
    </section>
  );
}
