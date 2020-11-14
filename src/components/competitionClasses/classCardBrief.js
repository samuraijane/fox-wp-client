import React, { useState } from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { arrayOf, shape } from "prop-types";

const ClassCardBrief = ({ details, history }) => {
  const {
    // ability_levels: abilityLevels,
    // ages,
    amount,
    // description,
    // division: hasDivisions,
    // engine_ccs_and_cycle: engines,
    // genders,
    // is_active: isActive,
    letter,
    name_in_ui: name,
    name_in_code: value,
    // notes,
    // source,
  } = details;

  return (
    <div className="class-card class-card--brief">
      <div className="class-card--brief__name">
        <h2>{name}</h2>
        <span>{letter}</span>
        <span>$ {amount}</span>
      </div>
      <button data-comp-class={value} data-amount={amount} onClick={() => history.push('/compete/signup/payment')}>Choose this class</button>
    </div>
  );

};

ClassCardBrief.propTypes = {
  classes: arrayOf(shape({})),
};

export default withRouter(ClassCardBrief);
