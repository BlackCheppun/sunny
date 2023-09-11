import React from "react";

const Card = (props) => {
  return (
    <div className="relative">
      <div className="flex justify-center flex-row ">
        <img
          src={props.link}
          className="rounded-lg object-center w-screen object-contain"
        ></img>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Card;
