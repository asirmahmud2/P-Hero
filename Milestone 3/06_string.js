const country ="Bangladesh";
var countr = `sjn`;

console.log(country);
country[2]='t';
countr[2]='t';
console.log(country);   // Can't change char in string
console.log(countr);   // Can't change char in string

const d= "   You  rs  ";
console.log(d.trim());   // Remove whitespace in Beginning and ending

const a= "whitespace";
const part = a.slice(2,5); // make slice 2nd to 4th
console.log(part);

const b="Remove whitespace in Beginning and ending";
const arr= b.split(' ');  // slice whenever see a space and remove the space and push the string in array;
console.log(arr);

console.log(arr.join("||"));

console.log(a.includes('t'))  // check if string a have t in it return true