import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { arrayOf, shape } from "prop-types";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: AliceBlue;
  left: 0;
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 49;

  a {
    font-size: 14px;
    font-weight: 700px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
`;

const Navigation = ({ navs }) => {
  const navItems = navs.map((nav, index) => {
    return (
      <NavLink to={nav.title.toLowerCase()} key={index}>
        {nav.title}
      </NavLink>
    );
  });

  return (
    <StyledNav>
      <StyledDiv>{navItems}</StyledDiv>
    </StyledNav>
  );
};

Navigation.defaultProps = {
  navs: []
};

Navigation.propTypes = {
  navs: arrayOf(shape({})).isRequired
};

const mapDispatchToProps = {
  fetch
};

const mapStateToProps = state => ({
  blah: state.blah
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
