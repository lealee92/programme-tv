import React from "react";

const Images = ({ image }) => {
  return (
    <div className="sm-wrapper">
      <img alt="images-programmes" src={image}></img>
    </div>
  );
};

export default Images;
