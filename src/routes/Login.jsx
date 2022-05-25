import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <section id="login-section" className="steps">
      <div id="login-wrapper">
        <div className="heading-wrapper">
          <h1>Login</h1>
          <p id="login-info">
            Please make a username and a password if you wish to have a profile
            on our app
          </p>
          <div className="next-step">
            <Link to="/booking/additional">Skip this step</Link>
          </div>
        </div>
        <form id="form-login" action="">
          <div id="username" className="form-part">
            <label htmlFor="username">Username:</label>

            <input type="text" id="username" name="username" />
          </div>

          <div id="password" className="form-part">
            <label htmlFor="pwd">Password:</label>

            <input type="password" id="pwd" name="pwd" />
          </div>
          <button type="submit" className="next-step">
            <Link to="/booking/additional">Next</Link>
          </button>
        </form>
      </div>
    </section>
  );
}
