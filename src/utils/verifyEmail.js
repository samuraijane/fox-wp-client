// SOURCE https://www.w3resource.com/javascript/form/email-validation.php

const verifyEmail = val => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi;
  const isValid = val.match(re) && val.match(re)[0].length > 0;
  if (isValid || val.length === 0) return true;
  return false;
}

export default verifyEmail;