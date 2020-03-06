import React from "react";
import styled from "styled-components";
import { Input } from "./";

const StyledFieldset = styled.fieldset``;

const Avatar = () => {
  return (
    <StyledFieldset name="avatar">
      <Input name={"avatar"} type={"text"} />
    </StyledFieldset>
  );
};

export default Avatar;
