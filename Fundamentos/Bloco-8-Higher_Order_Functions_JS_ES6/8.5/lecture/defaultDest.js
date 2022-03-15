// Default destructuring
// Example 1: object
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Portuguese' } = person; //Default setting
  console.log(nationality);

// Example 2: array
const position2d = [3.0, 2.3];
const [x, y, z = 2.7] = position2d; //Default setting

console.log(x);
console.log(y);
console.log(z);