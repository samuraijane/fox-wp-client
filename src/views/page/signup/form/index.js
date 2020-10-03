import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { updateFieldValue } from '../../../../sstore/actions';

const Form = ({
  identity,
  contact,
  sponsors,
  usra,
  vehicle,
  skillLevel,
  emergencyContact
}) => {
  const identitySection = identity.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const contactSection = contact.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const vehicleSection = vehicle.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const skillLevelSection = skillLevel.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const usraSection = usra.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const sponsorSection = sponsors.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const emergencyContactSection = emergencyContact.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  return (
    <div>
      <p>Form Page</p>
        {identitySection}
        {contactSection}
        {vehicleSection}
        {skillLevelSection}
        {usraSection}
        {sponsorSection}
        {emergencyContactSection}
    </div>
  )
};

const mapDispatchToProps = {
  updateFieldValue
};

const mapStateToProps = (state) => ({
  identity: state.registerFields.identity,
  contact: state.registerFields.contact,
  sponsors: state.registerFields.sponsors,
  usra: state.registerFields.usra,
  vehicle: state.registerFields.vehicle,
  skillLevel: state.registerFields.skillLevel,
  emergencyContact: state.registerFields.emergencyContact
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
