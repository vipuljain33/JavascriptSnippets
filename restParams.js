//ES5

function fullAge()
{
  //Here we need to convert arguments to array so that we can loop over it as forEach method is not available for argumets object

  var argsArr = Array.prototype.slice.call(arguments)

  console.log(argsArr);

  argsArr.forEach(cur => {
    console.log((2016 - cur)>28);
  })


}

fullAge6(1990,1980,1988, 1983, 1992, 1993);

//ES6

function fullAge6(...years)
{
  console.log(years);

  years.forEach(cur => {console.log((2016-cur)>28);})

}
