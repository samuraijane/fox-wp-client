import React, { useState } from "react";
import { shape } from "prop-types";

const Radio = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState({
    [`"${data.id}"`]: ""
  });
  const handleClick = e => {
    setInputValue({ [`"${data.id}"`]: e.target.value });
  };
  const options = data.choices.map((option, index) => {
    return (
      <label key={index}>
        <input
          key={index}
          name={data.id}
          onClick={handleClick}
          type="radio"
          value={option.text}
        />
        {option.text}
      </label>
    );
  });
  return <div>{options}</div>;
};

Radio.propTypes = {
  data: shape({})
};

export default Radio;
