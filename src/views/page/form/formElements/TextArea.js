import React, { useState } from "react";
import { shape } from "prop-types";

const TextArea = ({ action, data, label }) => {
  const { defaultValue, description, id, isRequired, maxLength } = data;

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
      // TODO notify user? Not even sure we even need this
    }
  };



  return (
    <textarea
      id={id}
      onChange={handleChange}
      value={defaultValue}
    />
  );
};

TextArea.propTypes = {
  data: shape({})
};

export default TextArea;
