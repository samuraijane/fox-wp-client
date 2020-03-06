import React, { useState } from "react";

const Radio = ({ data }) => {
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

export default Radio;
