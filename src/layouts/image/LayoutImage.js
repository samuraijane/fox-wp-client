import React, { Fragment } from "react";
import { arrayOf, shape } from "prop-types";

const Image = ({ images }) => {
  const theImages = images.map((image, index) => {
    return (
      <div className="nimg thumbnail" key={index}>
        <img src={image.image.url} />
      </div>
    );
  });
  return <Fragment>{theImages}</Fragment>;
};

Image.propTypes = {
  images: arrayOf(shape({}))
};

export default Image;
