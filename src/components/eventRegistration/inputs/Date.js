import React, { useState } from "react";
import { shape } from "prop-types";

const Date = ({ data }) => {
  const [inputValue, setInputValue] = useState({
    [`"${data.id}"`]: ""
  });
  const handleChange = e => {
    setInputValue({ [`"${data.id}"`]: e.target.value });
  };
  return (
    <input
      id={data.id}
      name={data.id}
      onChange={handleChange}
      placeholder={data.label}
      type="date"
      value={inputValue[data.id]}
    />
  );
};

Date.propTypes = {
  data: shape({})
};

export default Date;
