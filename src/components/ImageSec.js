import React from "react";
import ImageSecCard from "./card/ImageSecCard";
import cone from "../assets/img/image-gallery-cone.jpg";
import orange from "../assets/img/image-gallery-orange.jpg";
import bottle from "../assets/img/image-gallery-milkbottles.jpg";
import sugar from "../assets/img/image-gallery-sugarcubes.jpg";

const ImageSec = () => {
  return (
    <div className="flex phone:flex-col">
      <div className="flex">
        <ImageSecCard src={bottle} />
        <ImageSecCard src={orange} />
      </div>
      <div className="flex">
        <ImageSecCard src={cone} />
        <ImageSecCard src={sugar} />
      </div>
    </div>
  );
};

export default ImageSec;
