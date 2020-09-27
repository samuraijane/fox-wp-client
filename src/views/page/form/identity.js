import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import BirthDate from '../../../components/formElements/input/BirthDate.js';
import Radio from '../../../components/formElements/input/Radio.js';
import Text from '../../../components/formElements/input/Text.js';

const Identity = ({fields}) => {

  const inputTypeMap = {
    birthdate: Text,
    firstname: Text,
    gender: Text,
    lastname: Text
  };

  const identityFields = fields.map((field, index) => {
    const normalizeFieldLabel = field.label.toLowerCase().replace(/\s/, '');
    const Input = inputTypeMap[normalizeFieldLabel];
    return <Input id="some-id" key={index} />;
  });
  return (
    <>
      <p>Identity Page</p>
      {fields && (
        <>
          {identityFields}
        </>
      )}
    </>
  )
};

const mapStateToProps = (state) => ({
  fields: state.registerFields.identity
});

export default withRouter(connect(mapStateToProps)(Identity));
