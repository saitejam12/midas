import React from "react";

function Buttons({ buttonCode, buttonAction, backFunction }) {
  const handleClick = () => {
    backFunction(buttonAction);
  };
  return (
    <button className='buttons' onClick={handleClick} disabled={buttonAction === null}>
      {buttonCode === 1 ? "Next" : "Prev"}
    </button>
  );
}

export default Buttons;
