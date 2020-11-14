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
      <label className="signup__radio-label" key={key}>
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
        <span>{choice.text}</span>
      </label>
    );
  });
  return (
    <div className="signup__radio-container">
      <h2>{label}</h2>
      {options}
    </div>
  );
};

Radio.propTypes = {
  data: shape({}),
};

export default Radio;
