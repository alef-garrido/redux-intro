// FUNCTION COMPOSITION
  // Probem: Given an input string, retund a trimmed string wrapped inside a div element
let input = '   JavaScript  ';

  //non-functional approach
// let output = "<div>" + input.trim() + "</div>";


  // Funtional approach
//trim
const trim = str => str.trim();
//wrap inside div
const wrapDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

wrapDiv(trim(input));
