import React, { useState } from "react";
import { shape } from "prop-types";

const Select = ({ action, data, label }) => {
  const { choices, defaultValue, id, isRequired } = data;

  const handleChange = e => {
    action(id, e.target.value)
  };

  const options = choices.map((choice, index) => {
    const key = `${id}_${index}`;
    return (
      <option
        key={key}
        value={choice.value}
      >
        {choice.text}
      </option>
    );
  });
  return (
    <div className="signup__select-container">
      <label htmlFor={id}>Select Your Engine Size</label>
      <select
        onChange={handleChange}
        id={id}
        name={id}
        required={isRequired}
        value={defaultValue}
      >
        {options}
      </select>
    </div>
  );
};

Select.propTypes = {
  data: shape({})
};

export default Select;
