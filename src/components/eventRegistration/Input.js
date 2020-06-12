import React from "react";
import { connect } from "react-redux";
import { shape } from "prop-types";
import { Age, Name } from "./inputs";

const Input = ({ data, type }) => {
  const inputTypeMap = {
    name: Name,
    age: Age,
    gender: Name,
    address: Name,
    phone: Name,
    email: Name,
    usra: Name,
    vehicle: Name,
    emergencycontact: Name,
  };

  if (data && data.length > 0) {
    const inputs = data
      // .filter(x => x.isHidden !== true)
      .map((input, index) => {
        const Temp = inputTypeMap[type];
        return (
          <div key={index}>
            <Temp label={input.label} data={data} />
          </div>
        );
      });

    return (
      <>
        <div>{inputs}</div>
      </>
    );
  }
  return <p>blah...</p>;
};

Input.propTypes = {
  pageData: shape({}),
};

export default Input;
