//                    Lecture examples
//////////////////////////////////////////////////////////////////////
console.log("DAMNNNNNNNN DANIEL, BACK AT IT AGAIN WITH THEM WHITE VANS");

// if statement
var input=1;
if (input) {
  console.log(input);
} else {
  console.log("Its not defined.");
}

//example of nested if statements, Triple equal signs means theres no type conversion
var value = 3;
if (value === 0) {
  console.log("zero");
} else if (value === 1) {
  console.log("one");
} else {
  console.log("or something else");
}


var value = 0;
switch (value) {  //ruby's case
  case 0:         //ruby's when
    console.log("zero");
    break;
    case 1:
    console.log(one);
    break;
  default:
  console.log("something else");
  break;

}
//javascript  while loop
var x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}

var a = 0;
while (true) {
  console.log(a);
  if (a >= 10) {
    break;
  } else {
    a++;
  }
}
//for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var arr = ["a", "b", "c", "d"];
for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

var arr = ["a", "b", "c", "d"];
arr.forEach(function(item) {
  console.log(item);
});

function my_func_stmt(arg) {   //in ruby : def my_method(arg)
  console.log("inside my function");
  console.log(arg);
}
my_func_stmt("Hi");
console.log(typeof my_func_stmt);

var my_func_exp = function(arg) {
  console.log("inside my function expression");
  console.log(arg);
}
my_func_exp("Hi");


function one() {
  return 1; //return 1
}
console.log(one());

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
  sum += arguments[i];
  }
  return sum;
}
console.log(addAll(1,2,3));
console.log(addAll(100,99,41));

function funcWithDefualts(a, b) {
  if (typeof(a) === "undefined") {
    a = 0;
  }
  if (typeof(b) === "undefined") {
    b = 0;
  }
  return a + b;
}
console.log(funcWithDefualts());
console.log(funcWithDefualts(1,2,3,4,5));

function times(how_many, block) {
  for (var i = 0; i < how_many; i++) {
    block();
  }
}
times(5, function(){ console.log("Damnnn Daniel, Back at it again with them white vans!"); })

console.log(typeof(isNaN));
console.log(isNaN(NaN));

console.log(isNaN("A"));
var a = NaN;
console.log(typeof(a) === "number" && isNaN(a));
//weird shit
console.log(null == undefined);
console.log(0 == false);
console.log("" == 0);
console.log([1,2] == "1,2");

//Arrays are actually hashes
a = [0,1,2];
a["x"] = "something";
console.log(a);

console.log(a.length); //you can add to array but then it wont count it

//two types of scopes, function scope and global scope
//Outside of a function, everything is global
console.log(a_var === undefined);
var a_var = 123;
//This will throw a reference error, func_var is not defined
// console.log(func_var === undefined);

function a_function() {
  console.log(func_var === undefined);
  var func_var = "func";
}

a_function();

var a = 1;
console.log(a);;
console.log(window.a);

var my_own_var = "hellojs1";

function hello1() {
  console.log(my_own_var);
}

console.log(y === undefined);
var y =3;

function scope_func() {
  var my_own_var = "hellojs1"
// hello1 is callsed a closure
  window.hello1 = function() {console.log(my_own_var);};
};
//Only after scope_func is called is hello1 defined
scope_func();


//The _proto field represents the "parent" of this object
console.dir({})
//fucky way of doing Object Oriented Programming
//Javascript has no real inheritance
var my_custome_object = {
    a_var: 1,
    a_function: function() {
      console.log(this.a_var);
    },
}
console.log(my_custome_object.a_var);
my_custome_object.a_function();

//Object Literal

var dog = {
  name: "Buster",
  bark: function() {
    console.log("Bow Wow");
  }
};
//we can do monkeypatching in javascript as well
console.log(dog.name);
dog.bark;

dog.type = "Pit Beagle";
dog.growl = function() {
  console.log("grrr");
}
dog.growl();
console.log(dog.type);

//ruby 'self' refers to the current scope
//Javascript 'this' refers to the current object

//Javascript can access a mgic global variable named 'document'
//holds information about the html on current page
function onChangeHandler(arg) {
  console.log("Something Changed");
  console.dir(arg);
}
// onChangeHandler();

//read the value of an html element
function onChangeHandler(input) {
  console.log("input Changed");
  alert (input.value);
}

//change a value of an html element but doesnt work
// var input = document.getElementById('fn1');
// input.value = "a default value";
//needs to load when a window is loaded
window.onload = function() {
  var input = document.getElementById('fn1');
  input.value = "a default value";
}





//                    Javascript Homework
///////////////////////////////////////////////////////////////////////////

    //ruby
// hoverboards = 0
//
// if hoverboards >= 100
//   puts "The future rocks!"
// elsif hoverboards < 100 and hoverboards > 1
//   puts "The future is pretty cool"
// elsif hoverboards == 1
//   puts "Meh"
// else
//   puts "The future is boring."
// end

var hoverboards = 0;
if (hoverboards > 100) {
  console.log("The future rocks!");
} else if (hoverboards < 100 && hoverboards > 1) {
  console.log("The future is pretty cool");
} else if (hoverboards == 1) {
  console.log("Meh");
} else {
  console.log("The future is boring");
}

// ruby
// puts "Let's Go!"
//
// 89.times do |speed|
//   puts "#{speed}mph!"
//   puts "ZOOOOOM" if speed == 88
// end
