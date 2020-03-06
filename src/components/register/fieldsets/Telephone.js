import React from "react";
import styled from "styled-components";
import { Input } from "./";

const StyledFieldset = styled.fieldset``;

const Telephone = () => {
  return (
    <StyledFieldset name="telephone">
      <Input name={"telephone"} type={"tel"} />
    </StyledFieldset>
  );
};

export default Telephone;
