import React from "react";

const ImageOnlyCard = (props) => {
  return (
    <div className="w-1/2 phone:w-screen">
      <img src={props.src} alt="hello there" className="w-full " />
    </div>
  );
};

export default ImageOnlyCard;
