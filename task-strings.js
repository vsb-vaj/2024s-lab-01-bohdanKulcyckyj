// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// "javascript-is-the-best"

// Your code:
const parametrize = (input) => {
  return input.toLowerCase().split(' ').join('-');
};
// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
const giveSentenceForPerson = (obj) => {
  const { name, position, age, location } = obj;
  return `Hello ${name} from ${location}! It is nice to meet you! You look awesome for your ${age}, young ${position}!`;
};

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
const replace = (input) => {
  const elementsToReplace = ['a', 'e', 'i', 'o'];
  return input.replace(new RegExp(elementsToReplace.join('|'), 'g'), '*');
};