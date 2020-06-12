import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { arrayOf, func, shape } from "prop-types";
import { EditorialLayout, HeroLayout, ImageLayout } from "../../layouts";
import CompetitionClasses from "./competitionClasses";
import FormSection from "./FormSection";
import { fetch } from "../../sstore/actions";

// eslint-disable-next-line react/prop-types
const EventRegistration = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [applicableClasses, setApplicableClasses] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [applicableFields, setApplicableFields] = useState({
    age: 0,
    gender: null,
  });
  useEffect(() => {
    props.fetch("classes");
    props.fetch("register");
    setApplicableClasses(props.classes.slice());
  }, []);

  const layouts = props.pageData.acf.layouts.map((layout, index) => {
    switch (layout.acf_fc_layout) {
      case "editorial_layout":
        return <EditorialLayout key={index} text={layout.body_text} />;
      case "images_layout":
        return <ImageLayout key={index} images={layout.images} />;
      case "hero_layout":
        return <HeroLayout graphic={layout.images[0].image.url} key={index} />;

      default:
        console.error("Unknown layout type.");
    }
  });

  const handleApplicableFields = (field) => {
    const { data, kind } = field;
    const newApplicableFields = Object.assign(applicableFields);
    newApplicableFields[kind] = data;
    setApplicableClasses(newApplicableFields);
  };

  if (
    Object.keys(props.registerFields).length === 0 &&
    props.registerFields.constructor === Object
  ) {
    return <p>Waiting...</p>;
  }
  return (
    <>
      {layouts}
      <FormSection
        classes={props.classes}
        handler={handleApplicableFields}
        formSection={props.registerFields}
      />
      {props.classes.length > 0 ? (
        <CompetitionClasses classes={props.classes} />
      ) : (
        ""
      )}
    </>
  );
};

EventRegistration.propTypes = {
  classes: arrayOf(shape({})),
  fetch: func,
  pageData: shape({}),
  registerFields: shape({}),
};

const mapDispatchToProps = {
  fetch,
};

const mapStateToProps = (state) => ({
  classes: state.classes,
  navs: state.navs,
  pages: state.pages,
  registerFields: state.registerFields,
  token: state.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventRegistration);
