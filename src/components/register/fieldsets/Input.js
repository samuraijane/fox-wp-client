import React, { useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input``;

const Input = ({ name, type }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      onChange={handleChange}
      defaultValue={value}
      name={name}
      placeholder={name}
      type={type}
    />
  );
};

Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired
};

export default Input;
