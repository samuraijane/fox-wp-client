import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";

const Html = ({ data }) => {
  return <input type="text" name={data.label} placeholder={data.label} />;
};

Html.propTypes = {
  pageData: shape({})
};

export default Html;
