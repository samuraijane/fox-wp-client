import React from "react";
import { string } from "prop-types";

const Hero = ({ graphic }) => {
  return (
    <div className="nimg">
      <img src={graphic} />
    </div>
  );
};

Hero.propTypes = {
  graphic: string
};

export default Hero;
