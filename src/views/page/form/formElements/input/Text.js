import React, { useState } from "react";
import { shape } from "prop-types";

const Text = ({ action, data, label }) => {
  const { defaultValue,
          id,
          isRequired,
          maxLength
        } = data;

  const isCharAllowed = char => {
        // space, comma, period, 0 through 9
    if (char === 32 || char === 44 || char === 46 || char >= 48 && char <= 57 ||
        // a through z, A through Z
        char >= 65 && char <= 90 || char >= 97 && char <= 122
    ) {
      return true;
    } else {
      return false;
    }
  }

  const handleChange = e => {
    const lastChar = e.target.value.slice(-1);
    const keyCode = lastChar ? lastChar.charCodeAt() : null;
    if (isCharAllowed(keyCode)) {
      action(id, e.target.value);
    }
    if (!keyCode) {
      // do nothing
    }
  };

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          className="form-field"
          id={id}
          required={isRequired}
          name={id}
          onChange={handleChange}
          maxLength={maxLength}
          type="text"
          value={defaultValue}
        />
      </>
    );
};

Text.propTypes = {
  data: shape({})
};

export default Text;
