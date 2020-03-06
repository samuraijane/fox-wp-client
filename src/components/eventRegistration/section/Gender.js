import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";

// data === choices
const Gender = ({ data }) => {
  const choices = data.map((choice, index) => {
    return (
      <option key={index} value={data.value}>
        {data.text}
      </option>
    );
  });
  return <select>{choices}</select>;
};

Gender.propTypes = {
  pageData: shape({})
};

export default Gender;
