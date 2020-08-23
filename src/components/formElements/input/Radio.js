import React, { useState } from "react";
import { shape } from "prop-types";

const Radio = ({ data }) => {
  const { choices, id, isRequired, label } = data;

  const [selected, setSelected] = useState("");

  const handleChange = e => {
    setSelected(e.target.value);
  };

  const options = choices.map((choice, index) => {
    const key = `${id}_${index}`;
    return (
      <label key={key}>
        <input
          checked={choice.value === selected}
          id={id}
          key={index}
          name={id}
          onChange={handleChange}
          required={isRequired}
          type="radio"
          value={choice.value}
        />
        {choice.text}
      </label>
    );
  });
  return (
    <>
      <h2>{label}</h2>
      {options}
    </>
  );
};

Radio.propTypes = {
  data: shape({}),
};

export default Radio;
