/*
  First letter uppercase 
  E.g.: example -> Example
*/
const capitalizeFirstLetter = text => {
  return text[0].toUpperCase() + text.slice(1)
}

export {
  capitalizeFirstLetter
}