function foo(){
	var a =2 ;
	this.bar();
}

function bar (){
	console.log(this.a);
}

//foo()      //Here foo is in global context and not function's

var myFunction = function() {
   console.log(this.a);
}
var a = 5 ;
//myFunction();

var obj = {
  a:2,
  bar:bar
}

obj.bar()   //Here bar() is in object obj context, so it is bound with obj object

var john = {
  name: 'John',
  greet: function(person){
    console.log('Hi '+ person+' , my name is '+ this.name);
  }
}

john.greet('Vipul')

var fx = john.greet
//fx('Vipul') //Here though fx is reference to john.greet, but that changes its context from john object to global


//Explicit Binding

var greet = function(){
  console.log(this.name);
}

var person2 = {
  name:'Person2'
}

var person1 = {
  name:'Person1'
}

greet.call(person2)

//New Binding

function boo(){

  var obj = {}
  this.name = 'Vipul'
  this.say = function(){
    console.log(`I am ${this.name}`);
  }

  return this;
}

var name = 'Amit'
var result = new boo()
console.log(result.name);
