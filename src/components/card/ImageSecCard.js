import React from "react";

const ImageSecCard = (props) => {
  return (
    <div className="">
      <img src={props.src} alt="image" className="h-auto max-w-full" />
    </div>
  );
};

export default ImageSecCard;
