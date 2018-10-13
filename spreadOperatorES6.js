function addFourAges(a,b,c,d){
  return a+b+c+d;
}

var sum = addFourAges(10,10,10,10);

console.log(sum);

//ES5

var ages = [20,20,20,20,20]

var sum2 = addFourAges.apply(this, ages);

console.log(sum2);

//ES6

const sum3 = addFourAges(...ages)
console.log(sum3);


//Merging two arrays

const family1 = ['Anna', 'Ben', 'Marco']

const family2 = ['Kurt', 'Jane', 'John']

const bigFamily = [...family1, 'Max', ...family2]

console.log(bigFamily);
