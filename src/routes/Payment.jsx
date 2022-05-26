import { useNavigate } from "react-router-dom";

export default function Step5(props) {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    //POST HER
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
            <label for="name">Name on card</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              autocomplete="cc-name"
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
              inputmode="numeric"
              autcomplete="cc-number"
              placeholder="0000 0000 0000 0000"
              pattern="[0-9]{13,16}"
            />
          </div>

          <div className="expire">
            <label for="expiry-date">Expiry date</label>
            <input
              required
              type="text"
              id="expiry-date"
              name="expiry-date"
              class="expiry-date"
              autocomplete="cc-exp"
              placeholder="MM/YY"
              minlength="4"
              pattern="[0-9/]+"
            />
          </div>
          <div className="code">
            <label for="security-code">Security code</label>
            <input
              required
              type="text"
              id="security-code"
              name="security-code"
              inputmode="numeric"
              minlength="3"
              maxlength="4"
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
