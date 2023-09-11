import React from "react";
import Textcardbutton from "../buttons/Textcardbutton";

const TextCard = (props) => {
  return (
    <div className="flex flex-col justify-between sm:py-10 sm:px-10 lg:py-20 lg:px-32 md:px-20 pl-38 xl:py-30 2xl:py-40 w-1/2 bg-white font-fraunces md:py-12 phone:w-screen  phone:py-12 phone:items-center phone:px-7 phone:text-center">
      <h2 className="  font-fraunes font-black sm:text-xl xl:text-5xl lg:text-3xl md:text-2xl phone:text-4xl">
        {props.title}
      </h2>
      <p className="font-barlow  text-neutral-700 font-semibold sm:text-card lg:text-sm xl:text-lg md:text-xs phone:pt-10 ">
        {props.p}
      </p>
      <Textcardbutton color={props.col} />
    </div>
  );
};

export default TextCard;
