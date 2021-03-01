import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Radio from './formElements/input/Radio.js';
import Text from './formElements/input/Text.js';
import { mockDataFor, updateFieldValue } from '../../../sstore/actions';

const USRA = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'usra', value);
  }

  const inputTypeMap = {
    usraclass: Text,
    usramember: Radio,
    usraplateno: Text
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
    <div className="signup__usra">
      {fields && (
        <>
          {contactFields}
          <div className="y-button">
            <button onClick={() => history.push('/compete/signup/form/sponsor')}>Next</button>
          </div>
        </>
      )}
    </div>
  )
};

const mapDispatchToProps = {
  updateFieldValue,
  mockDataFor
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.usra
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(USRA));
