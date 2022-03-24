// FUNCTION COMPOSITION
  // Probem: Given an input string, retund a trimmed string wrapped inside a div element

  //non-functional approach
  // let input = '  JavaScript ';
  // let output = "<div>" + input.trim() + "</div>";
  
  // Funtional approach
  import { compose, pipe } from 'lodash/fp'; // lodash functional programming package

  let input = '   JavaScript  ';
  
    //trim
  const trim = str => str.trim();
    //wrap inside div
  const wrapDiv = str => `<div>${str}</div>`;
  const toLowerCase = str => str.toLowerCase();
  
  // wrapDiv(toLowerCase(trim(input))); // Messy code replaced with lodash utility
  // const transformC = compose(wrapDiv, toLowerCase, trim) // first lodash utility to replace messy code iwith fncs in order
  const transformP = pipe(trim, toLowerCase, wrapDiv); 
  
  transformP(input);
  