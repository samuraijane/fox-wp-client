import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";

const Phone = ({ data }) => {
  return <input type="text" name={data.label} placeholder={data.label} />;
};

Phone.propTypes = {
  pageData: shape({})
};

export default Phone;
