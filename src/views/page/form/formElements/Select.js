import React, { useState } from "react";
import { shape } from "prop-types";

const Select = ({ data, saveFieldData, value }) => {
  const { choices, id, isRequired, label } = data;

  const handleChange = e => {
    saveFieldData([id.match(/[^_]*/gi)], e.target.value);
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
    <>
      <label htmlFor={id}>Select Your Engine Size</label>
      <select
        onChange={handleChange}
        id={id}
        name={id}
        value={value}
      >
        {options}
      </select>
    </>
  );
};

Select.propTypes = {
  data: shape({})
};

export default Select;
