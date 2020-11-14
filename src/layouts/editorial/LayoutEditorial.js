import React from "react";
import { string } from "prop-types";

const Editorial = ({ text }) => {
  return (
    <div className="y-wrap__inner y-editorial" dangerouslySetInnerHTML={{ __html: text }}/>
  );
};

Editorial.propTypes = {
  text: string
};

export default Editorial;
