import React, { useState } from "react";
import { arrayOf, shape } from "prop-types";
import CompetitionClass from "./CompetitionClass";

const CompetitionClasses = ({ classes }) => {

  const theClass = classes.map((theClass, index) => {
    console.log('pota blah')
    return <CompetitionClass key={index} theClass={theClass} />;
  });

  return (
    <>
      <div className="class-cards">{theClass}</div>
    </>
  );
};

CompetitionClasses.propTypes = {
  classes: arrayOf(shape({})),
};

export default CompetitionClasses;
