import React, { useEffect, useState } from "react";
import { shape } from "prop-types";
import validateChar from '../../../../../utils/validateChar';
import verifyEmail from '../../../../../utils/verifyEmail';

const Email = ({ action, data, label }) => {
  const { defaultValue, id, isRequired, maxLength } = data;

  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    setIsValidEmail(verifyEmail(defaultValue));
  })

  const handleChange = e => {
    let lastEnteredChar = '';
    if (e.target.value.length > 0) {
      lastEnteredChar = e.target.value.slice(-1);
    } else {
      // we need this to remove the first character when a user deletes everything
      action(id, lastEnteredChar);
    }

    const updateEmailValue = () => {
      const isValid = verifyEmail(defaultValue);

      action(id, e.target.value);

      if (!isValid) setIsValidEmail(false);
      if (isValid) setIsValidEmail(true);
    }

    const isValidChar = lastEnteredChar.length > 0 ? validateChar(lastEnteredChar, 'email') : false;

    if(isValidChar) updateEmailValue();

    //setIsValidEmail(e.target.value.length > 0 && isMatch)

  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={`form-field form-field--email ${isValidEmail ? '' : 'form-field--invalid'}`}
        id={id}
        maxLength={maxLength}
        name={id}
        onChange={handleChange}
        required={isRequired}
        type="email"
        value={defaultValue}
      />
    </>
  );
};

Email.propTypes = {
  data: shape({})
};

export default Email;
