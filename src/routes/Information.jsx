import { Link } from "react-router-dom";

export default function Step4(props) {
  return (
    <section id="step4-section" className="steps">
      <div id="step4-wrapper">
        <div className="heading-wrapper">
          <h1>Step 4</h1>
          <p>Your information</p>
        </div>
        <div id="form-information">
          <h2>Ticket holder</h2>
          <form id="ticket-holder" action="">
            <div id="firstname" className="form-part">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="John M."
                required
              />
            </div>
            <div id="lastname" className="form-part">
              <label htmlFor="lname">Last name</label>
              <input type="text" id="lname" name="lastname" placeholder="Doe" />
            </div>
            <div id="email" className="form-part">
              <label for="email"> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              ></input>
            </div>
            <div id="address" className="form-part">
              <label for="adr"> Address</label>
              <input
                type="text"
                id="adr"
                name="address"
                placeholder="Street Number Floor"
                required
              ></input>
            </div>
            <div id="postal" className="form-part">
              <label for="postal"> Postal code</label>
              <input
                type="text"
                id="postal"
                name="postal"
                placeholder="0000"
                pattern="[0-9]{3,4}"
                required
              ></input>
            </div>
            <div id="city" className="form-part">
              <label for="city"> City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="København"
                required
              ></input>
            </div>
          </form>
          <h2>Guest 1</h2>
          <form action="">
            <div id="firstname" className="form-part">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="John M."
                required
              />
            </div>
            <div id="lastname" className="form-part">
              <label htmlFor="lname">Last name</label>
              <input type="text" id="lname" name="lastname" placeholder="Doe" />
            </div>
            <div id="guest-email" className="form-part">
              <label for="email"> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              ></input>
            </div>
            <button type="submit" className="next-step">
              <Link to="/booking/payment">Next</Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
