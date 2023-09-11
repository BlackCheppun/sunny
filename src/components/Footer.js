import React from "react";
import FooterButton from "./buttons/FooterButton";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center py-10"
      style={{ background: "#458c7e" }}
    >
      <h1 className="font-black text-2xl" style={{ color: "#25564b" }}>
        sunnyside
      </h1>
      <div
        className="w-2/6 flex justify-between mt-7 phone:w-2/3"
        style={{ color: "#25564b" }}
      >
        <FooterButton text="About" />
        <FooterButton text="Services" />
        <FooterButton text="Projects" />
      </div>

      <div>
        <FooterIcons />
      </div>
    </div>
  );
};

export default Footer;
