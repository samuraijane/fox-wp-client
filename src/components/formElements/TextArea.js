import React, { useState } from "react";
import { shape } from "prop-types";

const TextArea = ({ data, saveFieldData, value }) => {
  const { description, id, isRequired, label, maxLength } = data;

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
      saveFieldData([id.match(/[^_]*/gi)], e.target.value);
    }
    if (!keyCode) {
      saveFieldData([id.match(/[^_]*/gi)], e.target.value);
    }
  };



  return (
    <textarea
      id={id}
      onChange={handleChange}
      value={value}
    />
  );
};

TextArea.propTypes = {
  data: shape({})
};

export default TextArea;
