import React from "react";

const ImageAndTextCard = (props) => {
  return (
    <div
      className=" text-inherit w-1/2 flex flex-col items-center phone:w-screen phone:relative  phone:box-content "
      style={{ color: props.col }}
    >
      <img
        src={props.src}
        alt="picture"
        className="w-full 2xl:object-contain "
      />
      <div className="z-1 md:bottom-40 sm:bottom-32 lg:bottom-44 xl:bottom-56  relative  text-center px-14 box-content phone:absolute phone:top-48">
        <h2 className=" lg:text-xl 2xl:text-3xl xl:text-xl sm:text-base md:text-lg font-fraunces font-bold sm:mb-1 mb-5 phone:text-xl">
          {props.title}
        </h2>
        <p className="font-barlow font-semibold sm:text-card md:text-xs xl:text-base 2xl:text-xl phone:text-sm">
          {props.p}
        </p>
      </div>
    </div>
  );
};

export default ImageAndTextCard;
