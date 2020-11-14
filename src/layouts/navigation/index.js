import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { arrayOf, shape } from "prop-types";
import { addStyleValue } from '../../sstore/actions/addStyleValue';
import './style.scss'; 

/**
 * A layout component that renders the main navigation.
 * 
 * @component
 * @name Navigation
 * @since Oct-17-20
 * @version 0.1.0
 * @author Matthew Day <matt@matthewday.net>
 * @param {Array} navs – An array of nav objects
 */
const Navigation = ({ navs, addStyleValue }) => {

  useEffect(() => {
    addStyleValue('headerHeight', `${document.getElementById('header').scrollHeight}px`);
  })

  const navItems = navs.map((nav, index) => {
    const navTitle = nav.title.toLowerCase();
    return (
      <NavLink activeClassName='y-navigation__active' exact={true} key={`index-${navTitle}`} to={`/${navTitle}`}>
        {nav.title}
      </NavLink>
    );
  });

  return (
    <header className="y-navigation" id="header">
      <div className="y-navigation__nav-items">{navItems}</div>
    </header>
  );
};

Navigation.defaultProps = {
  navs: []
};

Navigation.propTypes = {
  navs: arrayOf(shape({})).isRequired
};

const mapDispatchToProps = {
  addStyleValue
};

const mapStateToProps = state => ({
  blah: state.blah
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);