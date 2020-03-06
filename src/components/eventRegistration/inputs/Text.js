import React, { useEffect, useState } from "react";

const Text = ({ data }) => {
  const [inputValue, setInputValue] = useState({});
  useEffect(() => {
    data.inputs.map((input, index) => {
      setInputValue({ [`"${input.id}"`]: "" });
    });
  }, []);
  const handleChange = e => {
    setInputValue({ [`"${e.target.name}"`]: e.target.value });
  };
  const inputs = data.inputs.map((input, index) => {
    if (!input.isHidden) {
      return (
        <input
          key={index}
          name={input.id}
          onChange={handleChange}
          placeholder={input.label}
          type="text"
          value={inputValue[input.id]}
        />
      );
    }
  });
  return <p>{inputs}</p>;
};

export default Text;
