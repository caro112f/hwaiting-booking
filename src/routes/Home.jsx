import { Link } from "react-router-dom";
import backgroundimage from "../images/background-filter.webp";
import vinylImg from "../images/vinyl.svg";

export default function Home(props) {
  return (
    <main id="home">
      <section
        id="background"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <div>
          <h1 id="glow-h1">HWAITING</h1>
          <p>Scandinavias biggest K-pop festival</p>
        </div>
        <Link to="/booking">
          <button id="home-buylink">
            <p className="link-p">Buy Tickets</p>
          </button>
        </Link>
      </section>
      <section id="home-divider">
        <p>화이팅</p> <p>HWAITING</p> <p>화이팅</p> <p>HWAITING</p>{" "}
        <p>화이팅</p>
      </section>
      <section id="home-program-section">
        <h2>Curious about the festival's lineup?</h2>
        <p id="home-program-text">Check out the amazing artists here</p>
        {/*     <Link
          id="home-program-link"
          to={{ pathname: "https://www.youtube.com/" }}
          target="_blank"
        >
          <img id="home-program-img" src={vinylImg} alt="Vinyl"></img>
        </Link> */}
        <a
          id="home-program-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img id="home-program-img" src={vinylImg} alt="Vinyl"></img>
        </a>
      </section>
    </main>
  );
}
