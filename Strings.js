let firstName = 'Vipul'
let lastName = 'Jain'
const yearOfBirth = 1988
function calcAge(yearOfBirth)
{
  return 2018 - yearOfBirth
}


//ES5
console.log('This is '+ firstName + ' '+ lastName+ '. He was born in '+ yearOfBirth+ '. Today he is ' + calcAge(yearOfBirth)+ ' years old.');


//ES6 - We have template literals

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`

console.log(n.startsWith('v'));

console.log(n.endsWith('n'))

console.log(n.includes('ai'));

console.log(`${n} ` .repeat(3));
