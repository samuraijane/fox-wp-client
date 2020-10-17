import React, { useState } from "react";
import { shape } from "prop-types";

const BirthDate = ({ action, data, label }) => {
  const { defaultValue, id, isRequired } = data;

  const handleChange = e => {
    action(id, e.target.value)
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={handleChange}
        required={isRequired}
        type="date"
        value={defaultValue}
      />
    </>
  );
};

BirthDate.propTypes = {
  data: shape({})
};

export default BirthDate;
