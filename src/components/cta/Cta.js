import React from "react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: crimson;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
  display: inline-block;
  margin: 26px 0;
  padding: 8px 16px;
`;

const Cta = ({ link }) => {
  return (
    <div className="y-center">
      <StyledDiv>
        <NavLink to={link.href}>{link.text}</NavLink>
      </StyledDiv>
    </div>
  );
};

Cta.propTypes = {
  link: propTypes.object.isRequired
};

export default Cta;
