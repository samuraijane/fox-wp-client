/* eslint-disable react/prop-types, react/no-unescaped-entities */

import React from "react";
import { shape } from "prop-types";
import { Payment } from "../";
import {
  Break,
  Date,
  Email,
  Html,
  List,
  Radio,
  Telephone,
  Text,
} from "./inputs";
// import extractFormData from "../../utils/extractFormData";

const FormSection = ({ handler, formSection }) => {
  const inputTypeMap = {
    address: Text,
    birthdate: Date,
    email: Email,
    emergencycontact: Html,
    gender: Radio,
    name: Text,
    phone: Telephone,
    sectionbreak: Break, // TODO
    skilllevel: Radio,
    sponsors: List, // TODO
    usra: Html,
    vehicle: Html,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // const formData = extractFormData(data);
  };

  // for now, we are using Gravity Forms' cssClass attribute to group fields into sections
  // const groupBySection = fields => {
  //   let packages = [];
  //   let section = null;
  //   let groupedFields = [];
  //   fields.filter(field => field.cssClass).map(field => {
  //     if(!section) section = field.cssClass
  //     if(section === field.cssClass) {
  //       packages.push(field);
  //     } else {
  //
  //     }
  //   })
  // }

  // TODO remove hard-coded check
  if (formSection.fields.length === 12) {
    const sections = formSection.fields.map((section, index) => {
      const Input = inputTypeMap[section.label.toLowerCase().replace(/ /g, "")];
      return (
        <div key={index}>
          <h2>{section.label}</h2>
          <Input
            data={section}
            handler={
              section.label === "Age" || section.label === "Gender"
                ? handler
                : null
            }
          />
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
  pageData: shape({}),
};

export default FormSection;
