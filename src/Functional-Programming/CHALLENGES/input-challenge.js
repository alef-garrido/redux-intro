// 1. Write code in a functional style to convert the input to the output:
// input = { tag: “JAVASCRIPT” }
// output = “(javascript)”

import { pipe } from "lodash/fp";

const input = { tag: "JAVASCRIPT" };

const lowerCase = (obj) => obj.tag.toLowerCase();
const wrapper = (str) => `(${str})`;
const transform = pipe(lowerCase, wrapper);

console.log(transform(input));
