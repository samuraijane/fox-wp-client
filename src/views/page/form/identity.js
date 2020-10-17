import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import BirthDate from './formElements/input/BirthDate.js';
import Radio from './formElements/input/Radio.js';
import Text from './formElements/input/Text.js';
import { updateFieldValue } from '../../../sstore/actions';

const Identity = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'identity', value);
  }

  const inputTypeMap = {
    birthdate: BirthDate,
    firstname: Text,
    gender: Radio,
    lastname: Text
  };

  const identityFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/, '');
    // if (normalizeFieldLabel === "birthdate") setMatchingField() // we'll do this if we cannot modify things directly in WP (i.e. isMatchField: true)
    const Input = inputTypeMap[normalizeFieldLabel];
    return <Input action={handleChange} data={field} key={index} label={normalizeFieldLabel} />;
  });
  return (
    <>
      <p>Identity Page</p>
      {fields && (
        <>
          {identityFields}
          <button onClick={() => history.push('/compete/signup/form/contact')}>Next</button>
        </>
      )}
    </>
  )
};

const mapDispatchToProps = {
  updateFieldValue
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.identity
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Identity));
