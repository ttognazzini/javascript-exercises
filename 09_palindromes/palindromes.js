const palindromes = function (input) {
  let stripped = input.replace(/[\p{P}$+<=>^`|~]/gu, '').replace(/ /g,'').toLowerCase();
  return (stripped == stripped.split("").reverse().join("")) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
