import React, { dangerouslySetInnerHTML, useState } from "react";

const Html = ({ data }) => {
  const [inputValue, setInputValue] = useState(null);
  const handleChange = e => {
    setInputValue(e.target.value);
  };
  return <div dangerouslySetInnerHTML={{ __html: data.content }} />;
};

export default Html;

//
// <input id="usraClass" name="usraClass" placeholder="class" type="text" />
// <input id="usraDivision" name="usraDivision" placeholder="division" type="text"  />
// <input id="usraMember" name="usraMember" placeholder="member" type="text" />
// <input id="usraNumber" name="usraNumber" placeholder="number" type="text" />

// <input id="sponsors" name={data.id} placeholder="sponsors" type="text" />
// <input id="make" name="make" placeholder="make" type="text"  />
// <input id="model" name="model" placeholder="model" type="text" />
