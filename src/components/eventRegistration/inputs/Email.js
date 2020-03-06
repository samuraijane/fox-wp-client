import React, { useState } from "react";

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
      type="email"
      value={inputValue[data.id]}
    />
  );
};

export default Email;
