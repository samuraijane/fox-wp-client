import React, { useEffect, useState } from "react";
import { shape } from "prop-types";
import validateChar from '../../../../../utils/validateChar';
import verifyTelephone from '../../../../../utils/verifyTelephone';

const Telephone = ({ action, data, label }) => {
  const { defaultValue, id, isRequired, maxLength } = data;

  const [isValidTelephone, setIsValidTelephone] = useState(true);

  useEffect(() => {
    setIsValidTelephone(verifyTelephone(defaultValue));
  })

  const handleChange = e => {
    let lastEnteredChar = '';
    if (e.target.value.length > 0) {
      lastEnteredChar = e.target.value.slice(-1);
    } else {
      // we need this to remove the first character when a user deletes everything
      action(id, lastEnteredChar);
    }

    // TODO add dashes like xxx-xxx-xxxx (this is why we are not using maxLength in JSX)
    if (e.target.value && e.target.value.match(/[0-9]/g).length >= 11) return;

    const updateTelephoneValue = () => {
      const isValid = verifyTelephone(defaultValue);

      action(id, e.target.value);

      if (defaultValue.length < 10) setIsValidTelephone(false);
      if (isValid && defaultValue.length === 10) setIsValidTelephone(true);
    }

    const isValidChar = lastEnteredChar.length > 0 ? validateChar(lastEnteredChar, 'telephone') : false;
    if (isValidChar) updateTelephoneValue();    

  };
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={`form-field form-field--telephone ${isValidTelephone ? '' : 'form-field--invalid'}`}
        id={id}
        maxLength={maxLength}
        name={id}
        onChange={handleChange}
        required={isRequired}
        type="tel"
        value={defaultValue}
      />
    </>
  );
};

Telephone.propTypes = {
  data: shape({})
};

export default Telephone;
