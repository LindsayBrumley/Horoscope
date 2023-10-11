import React, { useEffect, useState } from "react";
import { getSigns } from "../service/api";

export const SelectSign = ({ onSignSelected }) => {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);

  return (
    <>
      <p className="select-sign">Select your sign</p>
      <div className="grid">
        {signs.map((sign) => (
          <button
            className="sign"
            key={sign}
            onClick={() => onSignSelected(sign)}
          >
            {sign}
          </button>
        ))}
      </div>
    </>
  );
};
