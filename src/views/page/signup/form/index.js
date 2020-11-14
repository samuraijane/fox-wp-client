import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { updateFieldValue } from '../../../../sstore/actions';
import CompetitionClasses from '../../../../components/competitionClasses';
import normalizeLabel from '../../../../utils/normalizeLabel';
import findAge from '../../../../utils/findAge';

const Form = ({
  classes,
  contact,
  emergencyContact,
  history,
  identity,
  skillLevel,
  sponsors,
  usra,
  vehicle  
}) => {
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [mAge, setMAge] = useState();
  const [mCCS, setMCCs] = useState();
  const [mGender, setMGender] = useState();
  const [mSkill, setMSkill] = useState();
  const [mCycle, setMCycle] = useState();

  const findMatchingClasses = () => {
    const matched = classes
      .filter(u => u.is_active === true)
      .filter(v => mAge >= v.ages.minimum && mAge <= v.ages.maximum)
      .filter(w => w.ability_levels.indexOf(mSkill) > -1)
      .filter(x => x.genders.indexOf(mGender) > -1)
      .map(y => {
        let isMatch = false;
        y.engine_ccs_and_cycle.forEach(item => {
          if(item.cycle === mCycle && (mCCS >= item.min_cc && mCCS <= item.max_cc)) isMatch = true;
        });
        if(isMatch) return y;
        return false;
      })
      .filter(z => z !== false);
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

  const identitySection = identity.map((field, index) => (
    <p data-row={index} key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const contactSection = contact.map((field, index) => (
    <p data-row={index} key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const vehicleSection = vehicle.map((field, index) => (
    <p data-row={index} key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const skillLevelSection = skillLevel.map((field, index) => (
    <p data-row={index} key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const usraSection = usra.map((field, index) => (
    <p data-row={index} key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const sponsorSection = sponsors.map((field, index) => (
    <p data-row={index} key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  const emergencyContactSection = emergencyContact.map((field, index) => (
    <p data-row={index} key={`${field.id}-${index}`}>{field.defaultValue}</p>
  ));

  return (
    <>
      <p>Please verify that the information you have entered is correct</p>
        <div className="signup__verify signup__verify--identity">
          <div className="signup__edit">
            <h2>Identity</h2>
            <button onClick={() => history.push('/compete/signup/form/identity')}>Edit</button>
          </div>
          {identitySection}
        </div>
        <div className="signup__verify signup__verify--contact">
          <div className="signup__edit">
            <h2>Contact</h2>
            <button onClick={() => history.push('/compete/signup/form/contact')}>Edit</button>
          </div>
          {contactSection}
        </div>
        <div className="signup__verify signup__verify--vehicle">
          <div className="signup__edit">
            <h2>Vehicle</h2>
            <button onClick={() => history.push('/compete/signup/form/vehicle')}>Edit</button>
          </div>
          {vehicleSection}
        </div>
        <div className="signup__verify signup__verify--skill-level">
          <div className="signup__edit">
            <h2>Skill Level</h2>
            <button onClick={() => history.push('/compete/signup/form/skill-level')}>Edit</button>
          </div>
          {skillLevelSection}
        </div>
        <div className="signup__verify signup__verify--usra">
          <div className="signup__edit">
            <h2>USRA</h2>
            <button onClick={() => history.push('/compete/signup/form/usra')}>Edit</button>
          </div>
          {usraSection}
        </div>
        <div className="signup__verify signup__verify--sponsors">
          <div className="signup__edit">
            <h2>Sponsors</h2>
            <button onClick={() => history.push('/compete/signup/form/sponsor')}>Edit</button>
          </div>
          {sponsorSection}
        </div>
        <div className="signup__verify signup__verify--emergency-contact">
          <div className="signup__edit">
            <h2>Emergency Contact</h2>
            <button onClick={() => history.push('/compete/signup/form/emergency-contact')}>Edit</button>
          </div>
          {emergencyContactSection}
        </div>
        <div className="y-button y-button--extended">
          <button onClick={findMatchingClasses}>Choose Your Class</button>
        </div>
        {filteredClasses && (
          <CompetitionClasses classes={filteredClasses} />
        )}
    </>
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
