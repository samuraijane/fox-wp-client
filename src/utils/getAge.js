const isClassMatch = toMatch => {

    const findAge = () => {
      const ageInMilliseconds = Date.now() - Date.parse(birthdate);
      const age = Math.round((ageInMilliseconds/(86400000*365)) * 10) / 10;
      return age;
    }

    const age = findAge();

    if (!is_active) return false;
    if (genders.indexOf(gender) < 0) return false;
    // if (age < ages.minimum || age > ages.maximum) return false;
    if (ability_levels.indexOf(skilllevel) < 0) return false;
    engine_ccs_and_cycle.forEach(engine => {
      if (engine.cycle !== enginetype) return false;
      if (engineccs < engine.min_cc || engineccs > engine.max_cc) return false;
    });
    return true;
  };