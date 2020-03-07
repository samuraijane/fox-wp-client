import React from "react";
import { shape } from "prop-types";

const Html = () => {
  // const [inputValue, setInputValue] = useState(null);
  // const handleChange = e => {
  //   setInputValue(e.target.value);
  // };
  return <div>This section TBD</div>;
};

Html.propTypes = {
  data: shape({})
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
