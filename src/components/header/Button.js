import React from "react";

const Button = (props) => {
  return (
    <button className="px-5 py-1 mx-1 text-lg font-medium text-white rounded-3xl  hover:bg-active-blue text-center hover:duration-300">
      {props.title}
    </button>
  );
};
export default Button;
