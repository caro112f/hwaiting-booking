import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Timer({ reservationData }) {
  let timer = reservationData["timeout"];
  //console.log(timer);

  let minutes = Math.floor(timer / 60000);
  let seconds = ((timer % 60000) / 1000).toFixed(0);

  let newSec = parseInt(seconds);

  const [timerMinutes, setTimerMinutes] = useState(minutes);
  const [timerSeconds, setTimerSeconds] = useState(newSec);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    console.log(timerMinutes, timerSeconds);
    let myInterval = setInterval(() => {
      if (timerSeconds > 0) {
        setTimerSeconds(timerSeconds - 1);
      }
      if (timerSeconds === 0) {
        if (timerMinutes === 0) {
          clearInterval(myInterval);
          showPopup();
        } else {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
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
      {/*  <div>Countdown: {counter}</div> */}
      <div className="timer">
        <p>
          {" "}
          Time left: {timerMinutes}:
          {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
        </p>
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
