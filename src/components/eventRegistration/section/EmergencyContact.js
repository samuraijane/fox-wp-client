import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";

// data === choices
const EmergencyContact = ({ data }) => {
  const choices = data.map((choice, index) => {
    return (
      <option key={index} value={data.value}>
        {data.text}
      </option>
    );
  });
  return <select>{choices}</select>;
};

EmergencyContact.propTypes = {
  pageData: shape({})
};

export default EmergencyContact;
