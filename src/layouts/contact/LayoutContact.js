import React from "react";
import { arrayOf, string } from "prop-types";

const Contact = ({ fields, message }) => {
  const theFields = fields.map((field, index) => {
    const label = field.toLowerCase().replace("s", "");
    return (
      <li key={index}>
        <label htmlFor={`${label}-${index}`}>
          <input id={`${label}-${index}`} placeholder={field} type="text" />
        </label>
      </li>
    );
  });

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className="y-wrap" onSubmit={handleSubmit}>
      <p>{message}</p>
      <ul>{theFields}</ul>
      <button type="submit">submit</button>
    </form>
  );
};

Contact.propTypes = {
  fields: arrayOf(string),
  message: string
};

export default Contact;
