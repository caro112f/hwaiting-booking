import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Timer(props) {
  const { initialMinute = 1, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          showPopup();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  function showPopup() {
    setReveal(true);
  }
  return (
    <div className="timer-wrapper">
      <div className="timer">
        {minutes === 0 && seconds === 0 ? null : (
          <p>
            {" "}
            Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        )}
      </div>
      <div className={reveal ? null : "hidden"} id="popup">
        <div className="dialog">
          <p className="black-text">
            Sorry, your time is up! <br /> Your tickets have been released.
          </p>
          <Link to="/">
            <button>Go to homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
