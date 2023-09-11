import React from "react";

const Textcardbutton = (props) => {
  if (props.color == "yellow") {
    return (
      <button className="sm:text-xs sm:w-24 font-bold w-32 uppercase font-fraunces border-b-4 border-yellow-500 border-opacity-20 hover:border-opacity-60 phone:pt-10">
        learn more
      </button>
    );
  } else {
    return (
      <button className="sm:text-xs sm:w-24  font-bold w-32 uppercase font-fraunces border-b-4 border-red-500 border-opacity-20 hover:border-opacity-60 phone:pt-10">
        learn more
      </button>
    );
  }
};

export default Textcardbutton;
