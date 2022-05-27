import { useNavigate } from "react-router-dom";

export default function Step5({
  reservationData,
  ticketHolderData,
  guestData,
}) {
  const navigate = useNavigate();
  let id = reservationData["id"];

  console.log(guestData);
  console.log(ticketHolderData);

  const onSubmit = (e) => {
    e.preventDefault();

    //POST RESERVATION
    fetch("https://hwaiting.herokuapp.com/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    //POST PERSONALBOOKINGINFO
    /* const bookingData = {
      firstName: "Jonas",
      lastName: "jofh@kea.dk",
      email: 40,
      country: "",
      city: "",
      bookingId: 0,
    }; */
    //firstname, lastname, email, country, city, bookingid stringify
    //array, post guest objects
    const postBookingData = JSON.stringify(ticketHolderData);

    fetch("https://hwaitingbookings-94dc.restdb.io/rest/bookings", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": "1f66c721de2bacf388b8f84f033e339b2c0ec",
      },
      body: postBookingData,
      guests: "",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    navigate("/confirmation");
  };

  return (
    <section className="steps" id="step5-section">
      <div id="step5-wrapper">
        <div className="heading-wrapper">
          <h1>Step 5</h1>
          <p>Card information</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="cardname">
            <label htmlFor="name">Name on card</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              autoComplete="cc-name"
              placeholder="Ex. John Doe"
            />
          </div>
          <div className="card-number">
            <label>Card number</label>
            <input
              required
              type="text"
              id="card-number"
              name="card-number"
              inputMode="numeric"
              autcomplete="cc-number"
              placeholder="0000 0000 0000 0000"
              pattern="[0-9]{13,16}"
            />
          </div>

          <div className="expire">
            <label htmlFor="expiry-date">Expiry date</label>
            <input
              required
              type="text"
              id="expiry-date"
              name="expiry-date"
              className="expiry-date"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              minLength="4"
              pattern="[0-9/]+"
            />
          </div>
          <div className="code">
            <label htmlFor="security-code">Security code</label>
            <input
              required
              type="text"
              id="security-code"
              name="security-code"
              inputMode="numeric"
              minLength="3"
              maxLength="4"
              placeholder="000"
              pattern="[0-9]+"
            />
          </div>
          <button type="submit" className="next-step" id="info-sub">
            Confirm payment
          </button>
        </form>
      </div>
    </section>
  );
}
