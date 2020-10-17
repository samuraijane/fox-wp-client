const findAge = birthdate => {
  const ageInMilliseconds = Date.now() - Date.parse(birthdate);
  const age = Math.round((ageInMilliseconds/(86400000*365)) * 10) / 10;
  return age;
};

export default findAge;