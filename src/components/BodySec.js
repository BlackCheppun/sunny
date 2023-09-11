import React from "react";
import Testimonycard from "./card/Testimonycard";
import p1 from "../assets/img/image-emily.jpg";
import p2 from "../assets/img/image-thomas.jpg";
import p3 from "../assets/img/image-jennie.jpg";

const BodySec = () => {
  return (
    <div className=" w-screen px-18 py-32 flex flex-col items-center bg-white phone:py-16 ">
      <h1
        className="mb-12 uppercase tracking-widest font-fraunces space font-bold xl:text-2xl"
        style={{ color: "#a7abae" }}
      >
        Client testimonials
      </h1>
      <div className="flex mx-20 justify-evenly phone:justify-between w-3/4 phone:w-full items-center phone:flex-col ">
        <Testimonycard
          src={p1}
          p="We put our trust in Sunnyside and they delivered, making sure our needs were met and dealines were always hit."
          name="Emily R."
          title="Marketing Director"
        />
        <Testimonycard
          src={p2}
          p="Sunnyside's enthusiasm coupled with their keen intrest in our brand's success made it a satisfying and enjoable experience"
          name="Thomas S."
          title="Chief operating Officer"
        />
        <Testimonycard
          src={p3}
          p="Incredible end result! Our sales increased over 400% when we worked wuth Sunnyside. Highly recommended!"
          name="Jennie F."
          title="Business Owner"
        />
      </div>
    </div>
  );
};

export default BodySec;
