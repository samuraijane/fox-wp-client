import React, { useState } from "react";
import { shape } from "prop-types";

const Email = ({ data }) => {
  const { id, isRequired, label, maxLength } = data;

  const id2 = `${label}_${id}`;

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = e => {
    // from https://www.w3resource.com/javascript/form/email-validation.php
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi;
    if(re.test(e.target.value)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    setEmail(e.target.value);
  };

  return (
    <>
      <label htmlFor={id2}>{label}</label>
      <input
        id={id2}
        maxLength={maxLength}
        name={id2}
        onChange={handleChange}
        required={isRequired}
        type="email"
        value={email}
      />
    </>
  );
};

Email.propTypes = {
  data: shape({})
};

export default Email;
