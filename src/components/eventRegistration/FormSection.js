/* eslint-disable react/prop-types, react/no-unescaped-entities */

import React, { useState } from "react";
import { shape } from "prop-types";
import { Payment } from "../";
import Date from '../formElements/input/Date.js';
import Email from '../formElements/input/Email.js';
import Radio from '../formElements/input/Radio.js';
import Select from '../formElements/Select.js';
import Telephone from '../formElements/input/Telephone.js';
import Text from '../formElements/input/Text.js';
import TextArea from '../formElements/TextArea.js';

import groupBy from "./utils/groupBy";
// import extractFormData from "../../utils/extractFormData";

const FormSection = ({ handler, formSection }) => {
  const inputTypeMap = {
    address: Text,
    birthdate: Text,
    email: Email,
    emergencycontactname: Text,
    emergencycontacttelephone: Text,
    engineccs: Select,
    enginetype: Radio,
    gender: Radio,
    name: Text,
    phone: Telephone,
    skilllevel: Radio,
    sponsors: TextArea,
    usraclass: Text,
    usradivision: Text,
    usramemberno: Text,
    usraplateno: Text,
    vehiclemake: Text,
    vehiclemodel: Text,
  };

  const [activeFormSection, setActiveFormSection] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // const formData = extractFormData(data);
  };

  // for now, we are using Gravity Forms' cssClass attribute to group fields into sections
  if (formSection.fields.length === 18) {
    const grouped = groupBy(formSection.fields, 'cssClass');
    const sections = Object.keys(grouped).map((section, index) => {
      console.log('pota section', grouped[section]);
      const sectionc = grouped[section].map((field, index2) => {
        const Input = inputTypeMap[field.label.toLowerCase().replace(/ /g, "")];
        return (
          <div key={index2}>
            <h2>{field.label}</h2>
            <Input
              data={field}
              handler={
                field.label === "Age" || field.label === "Gender"
                  ? handler
                  : null
              }
            />
          </div>
        );
      });
      return (
        <div className="form-section" key={index*100}>
          {activeFormSection === index && (
            <>{sectionc}</>
          )}
        </div>
      );
    });
    return (
      <>
        <Payment name={{ given_name: "Billy", surname: "Smith" }} />
        <form onSubmit={handleSubmit}>
          <div>{sections}</div>
          <button onClick={() => setActiveFormSection(activeFormSection - 1)}>Previous</button>
          <button onClick={() => setActiveFormSection(activeFormSection + 1)}>Next</button>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }

  return <p>Waiting...</p>;
};

FormSection.propTypes = {
  pageData: shape({}),
};

export default FormSection;
