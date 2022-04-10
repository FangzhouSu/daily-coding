// @ts-nocheck
var _ = require("underscore");

const fn = (args) => {
  console.log(args);
}

_.each([1, 2, 3], fn);
_.each({ a: 1 }, fn);