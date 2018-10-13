var john = {
  name: 'john',
  yearOfBirth: 1990,
  job: 'teacher'
};


//Function Constructor
var Person = function(name, yearOfBirth, job){
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job

}

Person.prototype.calculateAge = function(){
  console.log(2018 - this.yearOfBirth);
}

//instantiation
var john = new Person('john', 1990, 'teacher');
john.calculateAge()
var jane = new Person('jane', 1992, 'doctor')
jane.calculateAge()
console.log(Person.prototype);
console.log(john.__proto__ === Person.prototype);
