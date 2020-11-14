import React, { useState } from "react";
import { arrayOf, shape } from "prop-types";
import ClassCardBrief from './classCardBrief';
import ClassCardFull from './classCardFull';

const CompetitionClasses = ({ classes, isFull }) => {
  let classCards;
  if (isFull) {
    classCards = classes.map((theClass, index) => {
      return <ClassCardFull key={index} details={theClass} />;
    });
  } else {
    classCards = classes.map((theClass, index) => {
      return <ClassCardBrief key={index} details={theClass} />;
    });
  }

  return (
    <>
      <div className="class-cards">{classCards}</div>
    </>
  );
};

CompetitionClasses.propTypes = {
  classes: arrayOf(shape({})),
};

export default CompetitionClasses;
