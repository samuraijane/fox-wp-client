import React, { useState } from "react";
import { shape } from "prop-types";

const Date = ({ data }) => {
  const { id, isRequired, label } = data;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
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
