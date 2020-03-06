import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";
import { EditorialLayout } from "../../layouts";
import { fetch } from "../../sstore/actions";

const Email = ({ formSection }) => {
  if (formSection.fields.length > 0) {
    const sections = formSection.fields.map((section, index) => {
      return <h2 key={index}>{section.label}</h2>;
    });

    return (
      <>
        <p>{formSection.title}</p>
        <p>{formSection.description}</p>
        <div>{sections}</div>
      </>
    );
  }
  return <p>Waiting...</p>;
};

Email.propTypes = {
  pageData: shape({})
};

export default Email;
