import React from "react";
import styled from "styled-components";
import banner from "./../../assets/simon-moog.jpg";

const StyledDiv = styled.div`
  position: relative;
`;
const StyledContainer = styled.div`
  margin-bottom: 14px;
  width: 160%;
`;
const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;
const StyledHeading = styled.h1`
  left: 20px;
  position: absolute;
  top: 10px;
  @media(min-width: 768px) {
    font-size: 4.0rem
    left: 40px;
    line-height: 4.0rem;
    top: 40px;
  }
  @media(min-width: 992px) {
    font-size: 5.0rem
    left: 40px;
    line-height: 4.0rem;
    top: 40px;
  }
`;

const Banner = () => {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledImage src={banner}></StyledImage>
      </StyledContainer>
      <StyledHeading>Get Ready to Rumble</StyledHeading>
    </StyledDiv>
  );
};

export default Banner;
