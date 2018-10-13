//ES5

var john = ['john', 26]
var name = john[0]
var age = john[1]

console.log(name);
console.log(age);

//ES6

const [name1, age1] = [`john`, 26]
console.log(name1);
console.log(age1);


const obj = {
  firstname: 'Vipul',
  lastname: 'Jain'
}

const {firstname: a, lastname: b} = obj;

console.log(a);
console.log(b);

function calcAgeRetirement(year)
{
  const age = new Date().getFullYear() - year;
  return [age, 65-age];
}


//var result = calcAgeRetirement(1988);
//console.log(result);

const [age2, retirement] = calcAgeRetirement(1988)
console.log(age2);
console.log(retirement);
