const verifyTelephone = val => {
  const re = /^(([2-9]{1}[0-9]{2}))(\d{3})(\d{4})$/gi;
  const isValid = val.match(re) && val.match(re)[0].length > 0;
  if (isValid || val.length === 0) return true;
  return false;
}

export default verifyTelephone;