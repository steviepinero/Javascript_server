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
