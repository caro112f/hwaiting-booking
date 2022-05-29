import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";

export default function Step5({ reservationData, ticketHolderData }) {
  const navigate = useNavigate();
  let id = reservationData["id"];

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

    postPersonalData();
  };

  function postPersonalData() {
    const postFullData = JSON.stringify(ticketHolderData);
    console.log(ticketHolderData);
    fetch("https://hwaitingbookings-94dc.restdb.io/rest/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": "6290a5a6ccc2033946f4ab6b",
      },
      body: postFullData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    //.catch((err) => console.error(err));

    navigate("/confirmation");
  }
  // const now = new Date();
  // const until = new Date(now.getFullYear() + 10, now.getMonth());

  // function checkMonth() {
  //   let currentMonth = now.getMonth() + 1;
  //   if (currentMonth < 10) {
  //     return 0 + currentMonth;
  //   } else {
  //     return currentMonth;
  //   }
  // }
  //console.log(checkMonth);

  function limit(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";

        //this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }

    return val;
  }

  function cardExpiry(val) {
    let month = limit(val.substring(0, 2), "12");
    let year = val.substring(2, 4);

    return month + (year.length ? "/" + year : "");
  }

  return (
    <section className="steps" id="step5-section">
      <div id="step-wrapper">
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
            <NumberFormat format="#### #### #### ####" mask="_" />
            {/* <InputMask
              required
              type="text"
              id="card-number"
              name="card-number"
              inputMode="numeric"
              autcomplete="cc-number"
              placeholder="0000 0000 0000 0000"
              pattern="[0-9]{13,16}"
              //mask="9999 9999 9999 9999"
            /> */}
          </div>

          <div className="expire">
            <label htmlFor="expiry-date">Expiry date</label>
            <NumberFormat
              required
              id="expiry-date"
              name="expiry-date"
              className="expiry-date"
              format={cardExpiry}
            />

            {/* <input
              required
              type="month"
              id="expiry-date"
              name="expiry-date"
              className="expiry-date"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              minLength="4"
              pattern="[0-9/]+"
              mask="99/99"
              views={["month", "year"]}
              min={now}
              max={until}
            /> */}
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
          <button type="submit" className="next-step" id="payment-sub">
            Confirm payment
          </button>
        </form>
      </div>
    </section>
  );
}
