import React, { useState } from "react";
import { shape } from "prop-types";

const TextArea = ({ data }) => {
  const [inputValue, setInputValue] = useState({
    [`"${data.id}"`]: ""
  });
  return (
    <textarea
      id={data.id}
      name={data.id}
    ></textarea>
  );
};

TextArea.propTypes = {
  data: shape({})
};

export default TextArea;
