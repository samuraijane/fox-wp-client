import React from "react";
import styled from "styled-components";
import { Input } from "./";

const StyledFieldset = styled.fieldset``;

const Address = () => {
  const mapping = {
    street1: "text",
    street2: "text",
    city: "text",
    state: "text",
    postal: "text"
  };

  const keys = Object.keys(mapping);

  const fields = keys.map((field, index) => {
    return <Input key={index} name={field} type={mapping[field]} />;
  });

  return <StyledFieldset name="address">{fields}</StyledFieldset>;
};

export default Address;
