import React, { useState } from "react";

const Select = ({ data }) => {
  const [inputValue, setInputValue] = useState({
    [`"${data.id}"`]: ""
  });
  const handleChange = e => {
    setInputValue({ [`"${data.id}"`]: e.target.value });
  };
  const options = data.choices.map((option, index) => {
    return (
      <option key={index} value={option.text}>
        {option.text}
      </option>
    );
  });
  return (
    <>
      <label htmlFor={data.id}>Select something</label>
      <select onChange={handleChange} id={data.id} name={data.id}>
        {options}
      </select>
    </>
  );
};

export default Select;
