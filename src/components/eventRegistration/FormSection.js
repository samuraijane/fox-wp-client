/* eslint-disable react/prop-types, react/no-unescaped-entities */

import React from "react";
import { shape } from "prop-types";
import { Payment } from "../";
import {
  Break,
  Email,
  Html,
  List,
  Radio,
  Select,
  Telephone,
  Text
} from "./inputs";
import extractFormData from "../../utils/extractFormData";

const FormSection = ({ formSection }) => {
  const inputTypeMap = {
    address: Text,
    age: Select,
    email: Email,
    emergencycontact: Html,
    gender: Radio,
    name: Text,
    phone: Telephone,
    sectionbreak: Break, // TODO
    sponsors: List, // TODO
    usra: Html,
    vehicle: Html
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = extractFormData(data);
    console.log(formData);
  };

  if (formSection.fields.length === 11) {
    // TODO remove hard-coded check
    const sections = formSection.fields.map((section, index) => {
      const Input = inputTypeMap[section.label.toLowerCase().replace(/ /g, "")];
      return (
        <div key={index}>
          <h2>{section.label}</h2>
          <Input data={section} />
        </div>
      );
    });

    return (
      <>
        <Payment name={{ given_name: "Billy", surname: "Smith" }} />
        <form onSubmit={handleSubmit}>
          <p>{formSection.title}</p>
          <p>{formSection.description}</p>
          <div>{sections}</div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
  return <p>Waiting...</p>;
};

FormSection.propTypes = {
  pageData: shape({})
};

export default FormSection;
