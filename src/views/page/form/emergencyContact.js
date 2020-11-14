import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Text from './formElements/input/Text.js';
import { updateFieldValue } from '../../../sstore/actions';

const EmergencyContact = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'emergencyContact', value);
  }

  const inputTypeMap = {
    emergencycontactname: Text,
    emergencycontacttelephone: Text
  };

  const contactFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/g, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return (
      <div className="signup__input-container" key={`${normalizeFieldLabel}-${index}`}>
        <Input action={handleChange} data={field} label={normalizeFieldLabel} />
      </div>
    );
  });
  return (
    <div className="signup__emergency-contact">
      {fields && (
        <>
          {contactFields}
          <div className="y-button">
            <button onClick={() => history.push('/compete/signup/form')}>Next</button>
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
  fields: state.registerFields.emergencyContact
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmergencyContact));
