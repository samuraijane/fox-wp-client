import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { updateFieldValue } from '../../../../sstore/actions';
import normalizeLabel from '../../../../utils/normalizeLabel';
import findAge from '../../../../utils/findAge';

const Form = ({
  identity,
  contact,
  sponsors,
  usra,
  vehicle,
  skillLevel,
  emergencyContact,
  classes
}) => {
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [mAge, setMAge] = useState();
  const [mCCS, setMCCs] = useState();
  const [mGender, setMGender] = useState();
  const [mSkill, setMSkill] = useState();
  const [mCycle, setMCycle] = useState();

  const findMatchingClasses = () => {
    const matched = classes
      // get only the active classes
      .filter(x => x.is_active === true)
      // compare age, skill level, and gender
      .map(y => {
        if(!y) throw undefined;
        let isMatch = false;
        if(mAge >= y.ages.minimum && mAge <= y.ages.maximum) isMatch = true;
        if(y.ability_levels.indexOf(mSkill) > -1) isMatch = true;
        if(y.genders.indexOf(mGender) > -1) isMatch = true;
        if(isMatch) return y;
      })
      // compare engine cycle and cc's
      .map(z => {
        if(!z) throw undefined;
        let isMatch = false;
        z.engine_ccs_and_cycle.forEach(item => {
          if(item.cycle === mCycle) isMatch = true;
          if(mCCS >= item.min_cc && mCCS <= item.max_cc) return true;
        });
      });
    setFilteredClasses(matched);
    // history.push("/payment");
  };

  // iterate over the sections that have fields we match against
  const checkUserMatchFields = () => {
    identity.forEach(field => {
      if(field.label === 'Birthdate') setMAge(findAge(field.defaultValue));
      if(field.label === 'Gender') setMGender(field.defaultValue);
    });
    vehicle.forEach(field => {
      if(field.label === 'Engine CCs') setMCCs(field.defaultValue);
      if(field.label === 'Engine Type') setMCycle(field.defaultValue);
    });
    skillLevel.forEach(field => {
      setMSkill(field.defaultValue);
    });
  };

  useEffect(() => {
    checkUserMatchFields()
  }, [])

  const identitySection = identity.map((field, i) => <p key={`${field.id}-${i}`}>{field.defaultValue}</p>);

  const contactSection = contact.map((field, index) => (
    <p key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const vehicleSection = vehicle.map((field, index) => {
    return <p key={`${field.id}-${index}`}>{field.defaultValue}</p>;
  });

  const skillLevelSection = skillLevel.map((field, i) => <p key={`${field.id}-${i}`}>{field.defaultValue}</p>);

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
        <button onClick={findMatchingClasses}>Find Matching Classes</button>
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
  emergencyContact: state.registerFields.emergencyContact,
  classes: state.classes
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
