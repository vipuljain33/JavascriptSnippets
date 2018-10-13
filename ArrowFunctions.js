const years = [1988, 1990, 1993, 1982]


//ES5 We can use map method to loop over the array

var ages5 = years.map(function(el){
  return 2018 - el
})

console.log(ages5);

//ES6


//One argument
let ages6 = years.map(el => 2018 - el)
console.log(ages6);


//Two argument
ages6 = years.map((el, index) => {return `Age elemement ${index + 1}: ${2018-el}`})

console.log(ages6);
