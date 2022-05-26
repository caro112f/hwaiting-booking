import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import GuestSection from "../components/GuestSection";

export default function Step4({
  setTicketHolderData,
  ticketsinBasketNo,
  reservationData,
  setGuestData,
}) {
  //const { basket } = useContext(BasketContext);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const N = ticketsinBasketNo - 1;
  const guestsAmount = Array.from({ length: N }, (_, index) => index + 1);

  let id = reservationData["id"];

  //preventdefault makes sure it does not refresh the page when submitting
  const fNameChanged = (e) => {
    setFname(e.target.value);
  };

  const lNameChanged = (e) => {
    setLname(e.target.value);
  };

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const options = useMemo(() => countryList().getData(), []);

  const countryChanged = (value) => {
    setCountry(value);
  };

  const cityChanged = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //console.log(e.target.elements);

    setTicketHolderData({
      firstName: e.target.elements.firstname.value,
      lastName: e.target.elements.lastname.value,
      email: e.target.elements.email.value,
      country: e.target.elements.country.value,
      city: e.target.elements.city.value,
      bookingId: id,
    });
    if (ticketsinBasketNo >= 2) {
      let guestFirstNames = [];
      e.target.elements.guestfirstname.forEach((n) => {
        guestFirstNames.push(n.value);
      });

      let guestLastNames = [];
      e.target.elements.guestlastname.forEach((n) => {
        guestLastNames.push(n.value);
      });

      // map igennem firstnames: e=value i array, i=index i array
      //matcher current e med e i andet array med samme index + et mellemrum
      let guestNameData = guestFirstNames.map(
        (e, i) => e + " " + guestLastNames[i]
      );
      //console.log(guestNameData);
      setGuestData(guestNameData);
    }

    navigate("/booking/payment");
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
              <Select
                id="country"
                name="country"
                className="form-part"
                options={options}
                value={country}
                onChange={countryChanged}
                required
              />

              <div id="city" className="form-part">
                <label htmlFor="city"> City/State</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  pattern="^[\p{L}\s-]+$"
                  placeholder="København"
                  onChange={cityChanged}
                  value={city}
                  required
                ></input>
              </div>
            </section>
            {/* show additional guest info if theres more than one ticket selected. The number of additional guest number depends on the amount of tickets selcted */}
            {ticketsinBasketNo < 2
              ? null
              : guestsAmount.map((a) => (
                  <GuestSection guestsAmount={guestsAmount} />
                ))}
            <button type="submit" className="next-step" id="info-sub">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
