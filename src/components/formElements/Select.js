import React, { useState } from "react";
import { shape } from "prop-types";

const Select = ({ data }) => {
  const { choices, id, isRequired, label } = data;

  const [selected, setSelected] = useState("");

  const handleChange = e => {
    setSelected(e.target.value);
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
        value={selected}
      >
        {options}
      </select>
      <p>{selected}</p>
    </>
  );
};

Select.propTypes = {
  data: shape({})
};

export default Select;
