import React from "react";

const Testimonycard = (props) => {
  return (
    <div className="flex flex-col items-center mx-5 w-60 phone:mt-10">
      <img src={props.src} className="w-14 xl:w-24 rounded-full" alt="image" />
      <p
        className="text-xs font-barlow font-medium mt-10 phone:mt-5 text-center xl:text-base"
        style={{ color: "#5a636c" }}
      >
        {props.p}
      </p>
      <h3
        className="text-gl xl:text-2xl font-extrabold font-fraunces mt-10 phone:mt-5"
        style={{ color: "#5a636c" }}
      >
        {props.name}
      </h3>
      <span className="text-xs font-barlow opacity-80 mt-5 phone:mt-2">
        {props.title}
      </span>
    </div>
  );
};

export default Testimonycard;
