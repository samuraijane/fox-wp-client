import React from "react";
import styled from "styled-components";
import { Input } from "./";

const StyledFieldset = styled.fieldset``;

const Gender = () => {
  return (
    <StyledFieldset name="gender">
      <Input name={"gender"} type={"text"} />
    </StyledFieldset>
  );
};

export default Gender;
