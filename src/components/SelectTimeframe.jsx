import React from "react";

export const SelectTimeframe = ({ onTimeframeSelected }) => {
  return (
    <>
      <p className="timeframe">Select a timeframe...</p>
      <div className="grid">
        {["yesterday", "today", "tomorrow"].map((timeframes) => (
          <div className="timeframe-buttons-container">
            <button
              className="timeframe-buttons"
              key={timeframes}
              onClick={() => onTimeframeSelected(timeframes)}
            >
              {timeframes}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
