import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { arrayOf, shape } from "prop-types";
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
const Navigation = ({ navs }) => {

  const navItems = navs.map((nav, index) => {
    const navTitle = nav.title.toLowerCase();
    return (
      <NavLink activeClassName='y-navigation__active' exact={true} key={`index-${navTitle}`} to={`/${navTitle}`}>
        {nav.title}
      </NavLink>
    );
  });

  return (
    <div className="y-navigation">
      <div className="y-navigation__nav-items">{navItems}</div>
    </div>
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