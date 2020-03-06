import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";

const Name = ({ data }) => {
  return <input type="text" name={data.label} placeholder={data.label} />;
};

Name.propTypes = {
  pageData: shape({})
};

export default Name;
