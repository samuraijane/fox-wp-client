import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";

const Vehicle = ({ data }) => {
  return <input type="text" name={data.label} placeholder={data.label} />;
};

Vehicle.propTypes = {
  pageData: shape({})
};

export default Vehicle;
