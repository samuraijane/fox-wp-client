/* eslint-disable react/prop-types, react/no-unescaped-entities */

import React, { Fragment, useEffect, useState } from "react";
import { shape } from "prop-types";
import { Payment } from "../";
import CompetitionClasses from "./competitionClasses";
import Date from '../formElements/input/Date.js';
import Email from '../formElements/input/Email.js';
import Radio from '../formElements/input/Radio.js';
import Select from '../formElements/Select.js';
import Telephone from '../formElements/input/Telephone.js';
import Text from '../formElements/input/Text.js';
import TextArea from '../formElements/TextArea.js';

import defaultFields from './defaultFields';
import groupBy from "./utils/groupBy";
// import extractFormData from "../../utils/extractFormData";

const FormSection = ({ classes, formSection }) => {
  const inputTypeMap = {
    address1: Text,
    address2: Text,
    birthdate: Date,
    city: Text,
    email: Email,
    emergencycontactname: Text,
    emergencycontacttelephone: Telephone,
    engineccs: Select,
    enginetype: Radio,
    firstname: Text,
    gender: Radio,
    lastname: Text,
    phone: Telephone,
    skilllevel: Radio,
    sponsors: TextArea,
    state: Text,
    usraclass: Text,
    usradivision: Text,
    usramemberno: Text,
    usraplateno: Text,
    vehiclemake: Text,
    vehiclemodel: Text,
    zipcode: Text,
  };

  const [activeFormSection, setActiveFormSection] = useState(0);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [formFields, setFormFields] = useState(defaultFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // const formData = extractFormData(data);
  };

  const saveFieldData = (key, value) => {
    const parsedKey = key[0][0];
    const formFieldsUpdated = Object.assign({}, formFields, {
      ...formFields,
      [parsedKey]: value
    })
    setFormFields(formFieldsUpdated);
  }

  useEffect(() => {
    console.log('pota useEffect');
  }, [filteredClasses]);

  const isClassMatch = (toMatch, matchAgainst=classes) => {
    const {
      is_active,
      genders,
      // ages,
      ability_levels,
      engine_ccs_and_cycle
    } = matchAgainst;

    const {
      // gender,
      // age,
      ability_level,
      // engine_cc,
      //engine_cycle
    } = formFields;

    if (!is_active) return false;
    // if (genders.indexOf("female") < 0) return false;
    // if (age < ages.minimum || age > ages.maximum) return false;
    if (ability_levels.indexOf("headsUp") < 0) return false;
    // engine_ccs_and_cycle.forEach(engine => {
    //   if (engine.cycle !== engine_cycle) return false;
    //   if (engine_cc < engine.min_cc || engine_cc > engine.max_cc) return false;
    // });
    return true;
  };

  const findMatchingClasses = () => {
    const matched = classes.filter(match => {
      console.log('pota isClassMatch', isClassMatch(null, match));
      return isClassMatch(null, match) === true;
    });
    setFilteredClasses(matched);
  };

  const handleFormSectionChange = advance => {
    setActiveFormSection(activeFormSection + advance);
  };

  // for now, we are using Gravity Forms' cssClass attribute to group fields into sections
  if (formSection.fields.length === 23) {
    const grouped = groupBy(formSection.fields, 'cssClass');
    const sections = Object.keys(grouped).map((section, index) => {
      const sectionc = grouped[section].map((field, index2) => {
        const label2 = field.label.toLowerCase().replace(/ /g, "");
        const Input = inputTypeMap[label2];
        const fieldWithNewId = Object.assign({}, field, {
          ...field,
          id: `${label2}_${field.id}`
        })
        return (
          <Input
            key={index2}
            data={fieldWithNewId}
            saveFieldData={saveFieldData}
            value={formFields[label2]}
          />
        );
      });
      return (
        <Fragment key={index*100}>
          {activeFormSection === index && (
            <fieldset className="form-section">
              {sectionc}
            </fieldset>
          )}
        </Fragment>
      );
    });
    return (
      <>
        <Payment name={{ given_name: "Billy", surname: "Smith" }} />
        <form onSubmit={handleSubmit}>
          {sections}
          <button onClick={() => handleFormSectionChange(-1)}>Previous</button>
          <button onClick={() => handleFormSectionChange(1)}>Next</button>
          <button onClick={findMatchingClasses}>Find Matching Classes</button>
          <button type="submit">Submit</button>
        </form>
        {filteredClasses && filteredClasses.length > 0 && (
          <CompetitionClasses classes={filteredClasses} />
        )}
      </>
    );
  }

  return <p>Waiting...</p>;
};

FormSection.propTypes = {
  pageData: shape({}),
};

export default FormSection;
