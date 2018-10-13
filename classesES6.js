//ES5

var person = function(name, yearOfBirth, job)
{
  this.name = name;
  this.yearOfBirth = yearOfBirth
  this.job = job
}

person.prototype.calculateAge = function(){
  var age = new Date().getFullYear() -  this.yearOfBirth
  console.log(age);
}

var john = new person('john', 1990, 'teacher')

john.calculateAge()

//ES6

class Person6{
  constructor(name, yearOfBirth, job)
  {
    this.name = name;
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateAge(){
    var age = new Date().getFullYear() -  this.yearOfBirth
    console.log(age);
  }

  static greeting()
  {
    console.log('Hey, there!');
  }
}

const john6 = new Person6('john6', 1991, 'doctor')
Person6.greeting()
john6.calculateAge()
