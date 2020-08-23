import React, { useState } from "react";
import { shape } from "prop-types";

const Date = ({ data }) => {
  const { id, isRequired, label } = data;

  const id2 = `${label}_${id}`;

  return (
    <>
      <label htmlFor={id2}>{label}</label>
      <input
        id={id2}
        name={id2}
        required={isRequired}
        type="date"
      />
    </>
  );
};

Date.propTypes = {
  data: shape({})
};

export default Date;
