export default function GuestSection(props) {
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
        />
      </div>
      <div id="lastname" className="form-part">
        <label htmlFor="lname">Last name</label>
        <input type="text" id="lname" name="lastname" placeholder="Doe" />
      </div>
      <div id="guest-email" className="form-part">
        <label htmlFor="email"> Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="john@example.com"
          required
        ></input>
      </div>
    </section>
  );
}
