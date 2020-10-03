import React, { useState } from "react";
import { shape } from "prop-types";

const Radio = ({ action, data, label }) => {
  const { choices,
          defaultValue,
          id,
          isRequired } = data;

  const handleChange = e => {
    action(id, e.target.value);
  };

  const options = choices.map((choice, index) => {
    const key = `${id}_${index}`;
    return (
      <label key={key}>
        <input
          checked={choice.value === defaultValue}
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
