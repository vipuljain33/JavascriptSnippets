function retirement(retirementAge)
{
  var a = ' years left until retirement'
  return function yearsLeft(yearOfBirth)
  {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) +  a);
  }
}

var retirementUS = retirement(66)
retirementUS(1990)

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay){
    if(style === 'formal')
    {

    }
  }
}
