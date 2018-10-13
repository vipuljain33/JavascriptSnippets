var arr = [1989, 1982, 1975, 1990];


function arrCalc(arr, fn)
{
  var arrRes = []
  for(var i = 0; i < arr.length; i++)
  {
    arrRes.push(fn(arr[i]))
  }
  return arrRes;
}

function calcAge(el)
{
  return 2016 - el
}

function isFullAge(el)
{
  
  return el >=28
}

var ages = arrCalc(arr, calcAge);
console.log(ages);
var fullAges = arrCalc(ages, isFullAge);
console.log(fullAges);
