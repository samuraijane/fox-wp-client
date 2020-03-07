import React, { useState } from "react";
import { shape } from "prop-types";

const Telephone = ({ data }) => {
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
      type="tel"
      value={inputValue[data.id]}
    />
  );
};

Telephone.propTypes = {
  data: shape({})
};

export default Telephone;

// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
