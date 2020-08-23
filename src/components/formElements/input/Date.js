import React, { useState } from "react";
import { shape } from "prop-types";

const Date = ({ data, saveFieldData, value }) => {
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

Date.propTypes = {
  data: shape({})
};

export default Date;
