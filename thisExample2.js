function foo()
{
  setTimeout(function () {
    console.log(this.name);   //Since this is a callback function, this refers to global context
  }, 10);

  //console.log(this.name);

  setTimeout( () => console.log(this.name2), 10);   //This is an arrow function, here this refers to the lexical this or outer one
}

var person = {
  name: 'Vipul',
  name2:'Jain',
  foo:foo
}

person.foo()
