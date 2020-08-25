import React, { useState } from "react";
import { shape } from "prop-types";

const BirthDate = ({ data, saveFieldData, value }) => {
  const { id, isRequired, label } = data;

  const handleChange = e => {
    saveFieldData([id.match(/[^_]*/gi)], e.target.value);
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
        value={value}
      />
    </>
  );
};

BirthDate.propTypes = {
  data: shape({})
};

export default BirthDate;
