import React, { useState } from "react";
import { shape } from "prop-types";

const Telephone = ({ data }) => {
  const { id, isRequired, label, maxLength } = data;

  const [telephone, setTelephone] = useState("");
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
    setTelephone(target);
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
        value={telephone}
      />
    </>
  );
};

Telephone.propTypes = {
  data: shape({})
};

export default Telephone;
