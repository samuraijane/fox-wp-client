import React, { useState } from "react";
import { shape } from "prop-types";

const Email = ({ data }) => {
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

Email.propTypes = {
  data: shape({})
};

export default Email;
