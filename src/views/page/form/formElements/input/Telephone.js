import React, { useState } from "react";
import { shape } from "prop-types";

const Telephone = ({ data, saveFieldData, value }) => {
  const { id, isRequired, label, maxLength } = data;

  const [isValidTelephone, setIsValidTelephone] = useState(false);

  const handleChange = e => {
    // https://regexlib.com/Search.aspx?k=phone&AspxAutoDetectCookieSupport=1
    const re = /^[2-9]\d{2}-\d{3}-\d{4}$/gi;
    const target = e.target.value.toString();
    if(re.test(target)) {
      setIsValidTelephone(true);
    } else {
      setIsValidTelephone(false);
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
        type="tel"
        value={value}
      />
    </>
  );
};

Telephone.propTypes = {
  data: shape({})
};

export default Telephone;
