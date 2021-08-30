import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

export const WorkingFlipDate = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();

  const [tickValue, setTickValue] = useState(value);

  // Make the Tick instance and store it in the refs
  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  // Start the Tick.down process
  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: ["y", "M", "d", "h", "m", "s"],
    });


    // When the counter updates, update React's state value
    counter.onupdate = function (v) {
      setTickValue(v);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  // When the tickValue is updated, update the Tick.DOM element
  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = {

        years: tickValue[0],
        months: tickValue[1],
        days: tickValue[2],
        hours: tickValue[3],
        mins: tickValue[4],
        secs: tickValue[5]
        
      };
    }
  }, [tickValue]);

  return (
<div className="tick">
      <div data-repeat="true" data-layout="horizontal fit">
        <div className="tick-group">
          <div ref={divRef}>
            <span data-key="days" data-transform="pad(00)" data-view="flip" />
            <span className="tick-text-inline">:</span>
            <span data-key="hours" data-transform="pad(00)" data-view="flip" />
            <span className="tick-text-inline">:</span>
            <span data-key="mins" data-transform="pad(00)" data-view="flip" />
            <span className="tick-text-inline">:</span>
            <span data-key="secs" data-transform="pad(00)" data-view="flip" />
          </div>
        </div>
      </div>
    </div>
  );
};
