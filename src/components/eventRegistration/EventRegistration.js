import React, { useEffect } from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";
import FormSection from "./FormSection";
import { fetch } from "../../sstore/actions";

// eslint-disable-next-line react/prop-types
const EventRegistration = ({ fetch, registerFields }) => {
  useEffect(() => {
    fetch("register");
  }, []);
  if (
    Object.keys(registerFields).length === 0 &&
    registerFields.constructor === Object
  ) {
    return <p>Waiting...</p>;
  }
  return <FormSection formSection={registerFields} />;
};

EventRegistration.propTypes = {
  pageData: shape({})
};

const mapDispatchToProps = {
  fetch
};

const mapStateToProps = state => ({
  navs: state.navs,
  pages: state.pages,
  registerFields: state.registerFields,
  token: state.token
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventRegistration);
