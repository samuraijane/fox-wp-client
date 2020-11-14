import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import TextArea from './formElements/TextArea.js';
import { updateFieldValue } from '../../../sstore/actions';

const Sponsor = ({ fields, history, updateFieldValue }) => {

  const handleChange = (id, value) => {
    updateFieldValue(id, 'sponsors', value);
  }

  const inputTypeMap = {
    sponsors: TextArea,
  };

  const contactFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/g, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return <Input action={handleChange} data={field} key={index} label={normalizeFieldLabel} />;
  });
  return (
    <div className="signup__sponsors">
      {fields && (
        <>
          <p>List up to three sponsors in the box below. Separate each one with a comma.</p>
          {contactFields}
          <div className="y-button">
            <button onClick={() => history.push('/compete/signup/form/emergency-contact')}>Next</button>
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
  fields: state.registerFields.sponsors
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sponsor));
