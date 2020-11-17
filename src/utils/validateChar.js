// type can be 'email', 'telephone', 'text'
// TODO consider adding 8 (backspace) and/or 127 (delete)
// TODO telephone can be improved so that user enters only numbers but is ultimately formatted with dashes

const validateChar = (inputCharacter, type) => {
  if (!inputCharacter) throw 'The character is invalid or missing.';
  if (!type) throw 'The type must be "email", "telephone", or "text". It is either invalid or missing.';
  
  const keyCode = inputCharacter ? inputCharacter.charCodeAt() : null;

  // let isAlphaChar     = keyCode >= 65 && keyCode <= 90 ||   // A through Z
  //                       keyCode >= 97 && keyCode <= 122     // a through z

  let isAlphaChar = /[A-Za-z]+/g

  // let isEmailChar     = keyCode === 45 ||  // hyphen or minus sign
  //                       keyCode === 46 ||  // period
  //                       keyCode === 64 ||  // @ sign
  //                       keyCode === 95     // underscore

  let isEmailChar = inputCharacter.match(/[.\-@\w]/gi);

  let isNumberChar = inputCharacter.match(/[0-9]+/g)

  // let isTextChar      = keyCode === 32 ||  // space
  //                       keyCode === 44 ||  // comma
  //                       keyCode === 46     // period

  if (type === 'email'      && isEmailChar )  return true;
  // if (type === 'text'       && (isAlphaChar  || isNumberChar || isTextChar) )   return true;

  if (type === 'telephone'  && isNumberChar )              return true;

  return false;

}

export default validateChar;