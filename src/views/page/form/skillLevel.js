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
    return (
      <div className="signup__input-container" key={`${normalizeFieldLabel}-${index}`}>
        <Input action={handleChange} data={field} label={normalizeFieldLabel} />
      </div>
    );
  });
  return (
    <div className="signup__skill-level">
      {fields && (
        <>
          {contactFields}
          <div className="y-button">
            <button onClick={() => history.push('/compete/signup/form/usra')}>Next</button>
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
  fields: state.registerFields.skillLevel
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SkillLevel));
