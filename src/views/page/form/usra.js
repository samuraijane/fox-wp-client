import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Text from './formElements/input/Text.js';
import { updateFieldValue } from '../../../sstore/actions';

const USRA = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'usra', value);
  }

  const inputTypeMap = {
    usraclass: Text,
    usradivision: Text,
    usramemberno: Text,
    usraplateno: Text
  };

  const contactFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/g, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return <Input action={handleChange} data={field} key={index} label={normalizeFieldLabel} />;
  });
  return (
    <>
      <p>USRA Page</p>
      {fields && (
        <>
          {contactFields}
          <button onClick={() => history.push('/compete/signup/form/sponsor')}>Next</button>
        </>
      )}
    </>
  )
};

const mapDispatchToProps = {
  updateFieldValue
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.usra
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(USRA));
