import React from "react";
import { connect } from "react-redux";
import { boolean, string } from "prop-types";
import './style.scss';

/**
 * An layout component that renders a hero graphic that extends edge-to-edge.
 * 
 * @component
 * @name Hero
 * @since Oct-17-20
 * @version 0.1.0
 * @author Matthew Day <matt@matthewday.net>
 * @param {string} graphic – URL of the image
 */
const Hero = ({ graphic, isFull, topMargin }) => {
  return (
    <div className="nimg nimg--hero" style={{ marginTop: topMargin }}>
      <img src={graphic} />
    </div>
  );
};

Hero.propTypes = {
  graphic: string
};

const mapStateToProps = state => ({
  topMargin: state.styles.headerHeight
});

export default connect(mapStateToProps)(Hero);
