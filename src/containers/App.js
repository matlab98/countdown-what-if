import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/styles.css";
import Firework from "../components/fireworks";
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

var windowWidth = 100;

const timerProps = {
  isPlaying: true,
  size: windowWidth,
};

const renderTime = (dimension, time) => {


  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="dimension">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function App() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = 1628647200; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
      <div className="flexbox padre">
        <Firework />
        {console.log(windowWidth)}
        <div className="App">
       <h2 className="title">Cuenta regresiva para:</h2>
      <h3 className="title">What if?...</h3>
      <div className="counter">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#7E2E84"]]}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime }) =>
              renderTime("días", getTimeDays(daysDuration - elapsedTime))
            }
          </CountdownCircleTimer>
          <p className="twoPoint"> : </p>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#D14081"]]}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > hourSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("horas", getTimeHours(daySeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <p className="twoPoint"> : </p>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#EF798A"]]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > minuteSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("minutos", getTimeMinutes(hourSeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <p className="twoPoint"> : </p>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#218380"]]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > 0,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("segundos", getTimeSeconds(elapsedTime))
            }
          </CountdownCircleTimer>
        </div>
      </div>
      </div>
  );
}
