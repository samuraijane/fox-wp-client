import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Radio from './formElements/input/Radio.js';
import Select from './formElements/Select.js';
import Text from './formElements/input/Text.js';
import { updateFieldValue } from '../../../sstore/actions';

const Vehicle = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'vehicle', value);
  }

  const inputTypeMap = {
    vehiclemake: Text,
    vehiclemodel: Text,
    engineccs: Select,
    enginetype: Radio,
  };

  const contactFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return <Input action={handleChange} data={field} key={index} label={normalizeFieldLabel} />;
  });
  return (
    <>
      <p>Vehicle Page</p>
      {fields && (
        <>
          {contactFields}
          <button onClick={() => history.push('/compete/signup/form/skill-level')}>Next</button>
        </>
      )}
    </>
  )
};

const mapDispatchToProps = {
  updateFieldValue
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.vehicle
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Vehicle));
