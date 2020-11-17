import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Email from './formElements/input/Email.js';
import Telephone from './formElements/input/Telephone.js';
import Text from './formElements/input/Text.js';
import { updateFieldValue } from '../../../sstore/actions';

const Contact = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value, type) => {
    updateFieldValue(id, 'contact', value);
  }

  const inputTypeMap = {
    address1: Text,
    address2: Text,
    city: Text,
    state: Text,
    zipcode: Text,
    phone: Telephone,
    email: Email
  };

  const contactFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return (
      <div className="signup__input-container" key={`${normalizeFieldLabel}-${index}`}>
        <Input action={handleChange} data={field} label={normalizeFieldLabel} />
      </div>
    );
  });
  return (
    <div className="signup__contact">
      {fields && (
        <>
          {contactFields}
          <div className="y-button">
            <button onClick={() => history.push('/compete/signup/form/vehicle')}>Next</button>
          </div>
        </>
      )}
    </div>
  )
};

const mapDispatchToProps = {
  updateFieldValue
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.contact
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));
