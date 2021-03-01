import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { arrayOf, shape } from "prop-types";
import ClassCardBrief from './classCardBrief';
import ClassCardFull from './classCardFull';

const CompetitionClasses = (props) => {
  let classCards;
  const theClasses = props.classes || props.classesRaw;
  if (props.isFull) {
    classCards = theClasses.map((theClass, index) => {
      return <ClassCardFull key={index} details={theClass} />;
    });
  } else {
    classCards = theClasses.map((theClass, index) => {
      return <ClassCardBrief key={index} details={theClass} />;
    });
  }

  return (
    <>
      <h1>Classes</h1>
      <div className="class-cards">{classCards}</div>
    </>
  );
};

CompetitionClasses.propTypes = {
  classes: arrayOf(shape({})),
};

const mapStateToProps = (state) => ({
  classesRaw: state.classes
})

export default withRouter(connect(mapStateToProps, null)(CompetitionClasses));
