import React from "react";
import styled from "styled-components";
import { Input } from "./";

const StyledFieldset = styled.fieldset``;

const Usra = () => {
  const mapping = {
    class: "text",
    division: "text",
    member: "text",
    number: "text"
  };

  const keys = Object.keys(mapping);

  const fields = keys.map((field, index) => {
    return <Input key={index} name={field} type={mapping[field]} />;
  });

  return <StyledFieldset>{fields}</StyledFieldset>;
};

export default Usra;
