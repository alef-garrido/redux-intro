import { pipe } from "lodash/fp";

const input = { tag: "JAVASCRIPT" }


const lowerCase = (obj) => obj.tag.toLowerCase();
const wrapper = (str) => `(${str})`;
const transform = pipe(lowerCase, wrapper)

console.log(transform(input));