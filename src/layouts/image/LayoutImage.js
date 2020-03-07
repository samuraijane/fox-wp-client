import React from "react";
import { arrayOf, shape } from "prop-types";

const Image = ({ images }) => {
  const theImages = images.map((image, index) => {
    return (
      <div className="nimg" key={index}>
        <img src={image.image.url} />
      </div>
    );
  });
  return <div className="images-container">{theImages}</div>;
};

Image.propTypes = {
  images: arrayOf(shape({}))
};

export default Image;
