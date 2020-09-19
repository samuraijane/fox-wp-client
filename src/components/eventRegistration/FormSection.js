/* eslint-disable react/prop-types, react/no-unescaped-entities */

import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { func, shape } from "prop-types";
import { Payment } from "../";
import CompetitionClasses from "./competitionClasses";
import BirthDate from '../formElements/input/BirthDate.js';
import Email from '../formElements/input/Email.js';
import Radio from '../formElements/input/Radio.js';
import Select from '../formElements/Select.js';
import Telephone from '../formElements/input/Telephone.js';
import Text from '../formElements/input/Text.js';
import TextArea from '../formElements/TextArea.js';
import { setUser } from "../../sstore/actions";

import defaultFields from './defaultFields';
import groupBy from "./utils/groupBy";
// import extractFormData from "../../utils/extractFormData";

const FormSection = ({ classes, formSection, history, setUser }) => {
  const inputTypeMap = {
    address1: Text,
    address2: Text,
    birthdate: BirthDate,
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
    //
  }, [filteredClasses]);

  const isClassMatch = (toMatch, matchAgainst=classes) => {
    const {
      ability_levels,
      ages,
      engine_ccs_and_cycle,
      genders,
      is_active,
    } = matchAgainst;

    const {
      birthdate,
      engineccs,
      enginetype,
      gender,
      skilllevel
    } = formFields;

    const findAge = () => {
      const ageInMilliseconds = Date.now() - Date.parse(birthdate);
      const age = Math.round((ageInMilliseconds/(86400000*365)) * 10) / 10;
      return age;
    }

    const age = findAge();

    if (!is_active) return false;
    if (genders.indexOf(gender) < 0) return false;
    // if (age < ages.minimum || age > ages.maximum) return false;
    if (ability_levels.indexOf(skilllevel) < 0) return false;
    engine_ccs_and_cycle.forEach(engine => {
      if (engine.cycle !== enginetype) return false;
      if (engineccs < engine.min_cc || engineccs > engine.max_cc) return false;
    });
    return true;
  };

  const findMatchingClasses = () => {
    const matched = classes.filter(match => {
      return isClassMatch(null, match) === true;
    });
    setFilteredClasses(matched);
    history.push("/payment");
  };

  const handleFormSectionChange = advance => {
    setActiveFormSection(activeFormSection + advance);
    setUser(formFields);
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
  setUser: func
};

const mapDispatchToProps = {
  setUser,
};

const mapStateToProps = (state) => ({
  user: state.user
});


export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(FormSection)));
