'use strict';

{
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Math.floor(Math.random() * (14 + 1))
  // Math.floor(Math.random() * source.length)

  const b = [];
  b[0] = source.splice(Math.floor(Math.random() * source.length), 1);
  b[0] = source.splice(Math.floor(Math.random() * source.length), 1);
  b[0] = source.splice(Math.floor(Math.random() * source.length), 1);
  b[0] = source.splice(Math.floor(Math.random() * source.length), 1);
  b[0] = source.splice(Math.floor(Math.random() * source.length), 1);

  console.log(b);
}