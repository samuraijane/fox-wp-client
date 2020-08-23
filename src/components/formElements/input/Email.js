import React, { useState } from "react";
import { shape } from "prop-types";

const Email = ({ data, saveFieldData, value }) => {
  const { id, isRequired, label, maxLength } = data;

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = e => {
    // from https://www.w3resource.com/javascript/form/email-validation.php
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi;
    if(re.test(e.target.value)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    saveFieldData([id.match(/[^_]*/gi)], e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        maxLength={maxLength}
        name={id}
        onChange={handleChange}
        required={isRequired}
        type="email"
        value={value}
      />
    </>
  );
};

Email.propTypes = {
  data: shape({})
};

export default Email;
