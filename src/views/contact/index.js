import React from "react";
import { shape } from "prop-types";
import { ContactLayout, EditorialLayout } from "../../layouts";

const Contact = ({ pageData }) => {
  const layouts = pageData.acf.layouts.map((layout, index) => {
    if (layout.acf_fc_layout === "editorial_layout") {
      return <EditorialLayout key={index} text={layout.body_text} />;
    }
    if (layout.acf_fc_layout === "contact_layout") {
      return (
        <ContactLayout
          key={index}
          fields={layout.contact_fields}
          message={layout.contact_message}
        />
      );
    }
    return <p key="blah">Error: Unknown layout</p>;
  });

  return <div>{layouts}</div>;
};

Contact.propTypes = {
  pageData: shape({})
};

export default Contact;
