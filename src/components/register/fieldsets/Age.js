import React from "react";
import styled from "styled-components";
import { Input } from "./";

const StyledFieldset = styled.fieldset``;

const Age = () => {
  return (
    <StyledFieldset name="age">
      <Input name={"age"} type={"number"} />
    </StyledFieldset>
  );
};

export default Age;
