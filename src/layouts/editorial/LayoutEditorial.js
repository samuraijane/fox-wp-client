import React from "react";
import { string } from "prop-types";

const Editorial = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

Editorial.propTypes = {
  text: string
};

export default Editorial;
