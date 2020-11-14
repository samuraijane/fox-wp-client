import React, { useState } from "react";
import { arrayOf, shape } from "prop-types";

const ClassCardFull = ({ details }) => {
  const {
    ability_levels: abilityLevels,
    ages,
    amount,
    description,
    division: hasDivisions,
    engine_ccs_and_cycle: engines,
    genders,
    is_active: isActive,
    letter,
    name_in_ui: name,
    name_in_code: value,
    notes,
    source,
  } = details;

  const theGenders = genders.map((gender, index) => {
    return <li key={index}>{gender}</li>;
  });
  const theAbilityLevels = abilityLevels.map((abilityLevel, index) => {
    return <li key={index}>{abilityLevel}</li>;
  });
  const theEngine = engines.map((engine, index) => {
    return (
      <li key={index}>
        {engine.cycle}: {engine.min_cc}cc to {engine.max_cc}cc
      </li>
    );
  });

  const willDivision = hasDivisions ? "will be" : "will not be";

  return (
    <ul className="class-card">
      <li className="a">
        <h2>{name}</h2>
        <span>{letter}</span>
      </li>
      <li className="c">
        <ul className="card-list">{theGenders}</ul>
      </li>
      <li className="d">
        <p>
          ages {ages.minimum}
          <span> &mdash; </span>
          {ages.maximum}
        </p>
      </li>
      <li className="e">
        <span className={isActive ? "active" : "inactive"}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </li>
      <li className="f">
        <p>{`The ability levels below ${willDivision} tracked in separate divisions`}</p>
        <ul className="card-list">{theAbilityLevels}</ul>
      </li>
      <li className="g">
        <span>$ {amount}</span>
      </li>
      <li className="h">
        <ul className="card-list">{theEngine}</ul>
      </li>
      <li className="i">
        <h4>Description</h4>
        <p className={description ? "" : "inactive"}>
          {description ? description : "No description..."}
        </p>
      </li>
      <li className="j">
        <h4>Notes</h4>
        <p className={notes ? "" : "inactive"}>
          {notes ? notes : "No notes..."}
        </p>
      </li>
      <li className="k">
        <p>
          {value} / {source}
        </p>
      </li>
    </ul>
  );

};

ClassCardFull.propTypes = {
  classes: arrayOf(shape({})),
};

export default ClassCardFull;
