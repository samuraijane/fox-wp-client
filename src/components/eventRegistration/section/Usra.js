import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";

const Usra = ({ data }) => {
  return <input type="text" name={data.label} placeholder={data.label} />;
};

Usra.propTypes = {
  pageData: shape({})
};

export default Usra;
