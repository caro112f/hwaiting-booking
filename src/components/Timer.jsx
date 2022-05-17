import { useState, useEffect } from "react";

export default function Timer(props) {
  //   const [countDown, setCountDown] = useState(0);

  //   useEffect(() => {
  //     setCountDown(60 * 5);
  //     let timerId = setInterval(() => {
  //       setCountDown((countDown) => countDown - 1);
  //     }, 1000);
  //     if (countDown < 0) {
  //       clearInterval(timerId);
  //     }
  //   }, []);

  //   const seconds = String(countDown % 60).padStart(2, 0);
  //   const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  //   console.log(minutes, seconds);

  return (
    <section className="timer-wrapper">
      <p>test</p>
      {/* <div className="timer">
        Time: {minutes}:{seconds}
      </div> */}
    </section>
  );
}
