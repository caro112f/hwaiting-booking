import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Timer(props) {
  const [reveal, setReveal] = useState(false);

  //timeout: 300000

  // console.log(timeoutNo);
  // const { initialMinute = 5, initialSeconds = 0 } = props;
  //const [minutes, setMinutes] = useState(initialtime);
  //const [seconds, setSeconds] = useState(initialtime);

  // ----- test-----
  // if (props.reservationData === undefined) {
  //   return console.log("timer not started yet");
  // } else {
  //   let timeoutNo = props.reservationData["timeout"];
  //   let initialtime = timeoutNo;
  //   const [minutes, setMinutes] = useState(initialtime);
  //   const [seconds, setSeconds] = useState(initialtime);
  //   useEffect(minutes, seconds, initialtime);
  // }
  // ----test-----

  // function millisToMinutesAndSeconds() {

  //   return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  // }
  //   ------ test---
  //   useEffect((initialtime, setMinutes, setSeconds) => {
  //     let minutes = Math.floor(initialtime / 60000);
  //     let seconds = ((initialtime % 60000) / 1000).toFixed(0);
  //     let myInterval = setInterval(() => {
  //       if (seconds > 0) {
  //         setSeconds(seconds - 1);
  //       }
  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           clearInterval(myInterval);
  //           showPopup();
  //         } else {
  //           setMinutes(minutes - 1);
  //           setSeconds(59);
  //         }
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(myInterval);
  //     };
  //   });
  // ------test---
  // console.log(millisToMinutesAndSeconds);

  // useEffect(() => {
  //   let myInterval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(myInterval);
  //         showPopup();
  //       } else {
  //         setMinutes(minutes - 1);
  //         setSeconds(59);
  //       }
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // });
  function showPopup() {
    setReveal(true);
  }
  return (
    <div className="timer-wrapper">
      {/* <div className="timer">
        {minutes === 0 && seconds === 0 ? null : (
          <p>
            {" "}
            Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        )}
      </div> */}
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
