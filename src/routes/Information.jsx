import { Link, useNavigate } from "react-router-dom";
// import { BasketContext } from "../contexts/basket";
// import { useContext } from "react";
import { useState } from "react";
import GuestSection from "../components/GuestSection";

export default function Step4(props) {
  //const { basket } = useContext(BasketContext);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const N = props.ticketsinBasketNo - 1;
  const guestsAmount = Array.from({ length: N }, (_, index) => index + 1);

  //console.log(guestsAmount);

  //const url = "https://hwaitingusers-33d4.restdb.io/rest/information";
  //const apikey = "98060cc9ca4c1e0b4f5349b52d27c4d51fb6c";

  const fNameChanged = (e) => {
    setFname(e.target.value);
  };

  const lNameChanged = (e) => {
    setLname(e.target.value);
  };

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  /* 
    preventdefault makes sure it does not refresh the page when submitting */

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/booking/payment");

    // Whatever method we wanna use to post our stuff
    /*    postInformation({
      firstname: name,
      lastname: name,
      email: email,
    }); */
  };

  return (
    <section id="step4-section" className="steps">
      <div id="step4-wrapper">
        <div className="heading-wrapper">
          <h1>Step 4</h1>
          <p>Your information</p>
        </div>

        <div id="form-information">
          <form onSubmit={onSubmit}>
            <section id="ticket-holder">
              <h2>Ticket holder</h2>

              <div id="firstname" className="form-part">
                <label htmlFor="fname">First name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="John M."
                  required
                  onChange={fNameChanged}
                  value={fName}
                />
              </div>

              <div id="lastname" className="form-part">
                <label htmlFor="lname">Last name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Doe"
                  required
                  onChange={lNameChanged}
                  value={lName}
                />
              </div>

              <div id="email" className="form-part">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  onChange={emailChanged}
                  value={email}
                ></input>
              </div>

              <div id="country" className="form-part">
                <label htmlFor="country">Country</label>
                <input
                  type="country"
                  id="country"
                  name="country"
                  placeholder="Denmark"
                  required
                ></input>
              </div>

              <div id="city" className="form-part">
                <label htmlFor="city"> City/State</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="København"
                  required
                ></input>
              </div>
            </section>
            {/* show additional guest info if theres more than one ticket selected. The number of additional guest number depends on the amount of tickets selcted */}
            {props.ticketsinBasketNo < 2
              ? console.log("No guests")
              : guestsAmount.map((a) => <GuestSection />)}
            <button type="submit" className="next-step" id="info-sub">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
