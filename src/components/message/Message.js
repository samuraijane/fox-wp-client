import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: AliceBlue;
  border: 1px solid transparent;
  border-radius: 4px;
  left: 50%;
  padding: 40px 20px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

const StyledSpan = styled.div`
  color: #666;
  cursor: pointer;
  display: block;
  font-size: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  &:after {
    content: "\0d7";
    line-height: 1rem;
    position: absolute;
    right: 10px;
    top: 14px;
  }
  &:hover:after {
    color: crimson;
  }
`;

const Message = ({ fn, text }) => {
  return (
    <StyledDiv>
      <StyledSpan onClick={fn}></StyledSpan>
      <p>{text}</p>
    </StyledDiv>
  );
};

Message.propTypes = {
  fn: propTypes.func.isRequired,
  text: propTypes.string.isRequired
};

export default Message;
