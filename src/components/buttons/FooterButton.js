import React from "react";

const FooterButton = (props) => {
  return (
    <button className="text-s font-barlow font-semibold hover:text-white duration-300">
      {props.text}
    </button>
  );
};

export default FooterButton;
