import { useState } from "react";

export default function GuestSection({ guestsAmount }) {
  const [guestfName, guestSetFname] = useState("");
  const [guestlName, guestSetLname] = useState("");

  const guestfNameChanged = (e) => {
    guestSetFname(e.target.value);
  };

  const guestlNameChanged = (e) => {
    guestSetLname(e.target.value);
  };

  return (
    <section id="guest">
      <h2>Guest</h2>

      <div id="firstname" className="form-part">
        <label htmlFor="fname">First name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="John M."
          required
          onChange={guestfNameChanged}
          value={guestfName}
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
          onChange={guestlNameChanged}
          value={guestlName}
        />
      </div>
    </section>
  );
}
