import React from "react";
import styled from "styled-components";
import { Input } from "./";

const StyledFieldset = styled.fieldset``;

const Emergency = () => {
  const mapping = {
    ename: "text",
    etelephone: "tel"
  };

  const keys = Object.keys(mapping);

  const fields = keys.map((field, index) => {
    return <Input key={index} name={field} type={mapping[field]} />;
  });

  return <StyledFieldset>{fields}</StyledFieldset>;
};

export default Emergency;
