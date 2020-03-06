import React from "react";
import gif from "./moto.gif";
import styled from "styled-components";

const StyledDiv = styled.div`
  left: 50%
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const StyledImage = styled.img``;

const Loading = () => {
  return (
    <StyledDiv>
      <StyledImage src={gif} />
    </StyledDiv>
  );
};

export default Loading;
