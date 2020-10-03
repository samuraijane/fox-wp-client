import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Radio from './formElements/input/Radio.js';
import { updateFieldValue } from '../../../sstore/actions';

const SkillLevel = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'skillLevel', value);
  }

  const inputTypeMap = {
    skilllevel: Radio
  };

  const contactFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return <Input action={handleChange} data={field} key={index} label={normalizeFieldLabel} />;
  });
  return (
    <>
      <p>Skill Level Page</p>
      {fields && (
        <>
          {contactFields}
          <button onClick={() => history.push('/compete/signup/form/usra')}>Next</button>
        </>
      )}
    </>
  )
};

const mapDispatchToProps = {
  updateFieldValue
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.skillLevel
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SkillLevel));
