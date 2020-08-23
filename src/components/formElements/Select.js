import React, { useState } from "react";
import { shape } from "prop-types";

const Select = ({ data }) => {
  const { choices, id, isRequired, label } = data;

  const id2 = `${label}_${id}`;

  const [selected, setSelected] = useState("");

  const handleChange = e => {
    setSelected(e.target.value);
  };

  const options = choices.map((choice, index) => {
    const key = `${id2}_${index}`;
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
      <label htmlFor={id2}>Select Your Engine Size</label>
      <select
        onChange={handleChange}
        id={id2}
        name={id2}
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
