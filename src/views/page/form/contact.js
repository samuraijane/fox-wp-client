import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Text from './formElements/input/Text.js';
import { updateFieldValue } from '../../../sstore/actions';

const Contact = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'contact', value);
  }

  const inputTypeMap = {
    address1: Text,
    address2: Text,
    city: Text,
    state: Text,
    zipcode: Text,
    phone: Text,
    email: Text
  };

  const contactFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return <Input action={handleChange} data={field} key={index} label={normalizeFieldLabel} />;
  });
  return (
    <>
      <p>Contact Page</p>
      {fields && (
        <>
          {contactFields}
          <button onClick={() => history.push('/compete/signup/form/vehicle')}>Next</button>
        </>
      )}
    </>
  )
};

const mapDispatchToProps = {
  updateFieldValue
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.contact
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));
