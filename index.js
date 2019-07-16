// var someName="mireille";
// console.log("mireille");
// var mFav= 2;
// var div= 0;
// div= mFav / 2;
// sub= mFav - 2;
// mult= mFav * 2;

// console.log(div);
// console.log(sub);
// console.log(mult);
// var Hello="hello world";


//  98.4.toExponential();
//  737.255342.toFixed();
//  sevenHundredEightyNine.toString();

// console.log(Hello);
// var word="I love JavaScript";
// word.toUpperCase();

// "pine".concat("apple");

///string to search

// var stringToSearch = "Please show me where 'show' is located!";

// var a = stringToSearch.search("show");
// console.log(a);
 
/// concatenation and character number

// var fName="Umutoniwase";
// var lName="Mireille";
// var fullName= fName + lName;
// "Umutoniwase" .concat("Mireille");
// "Mireille".charAt(1);
// console.log(fullName);


// upper and lower case
// var fName="Umutoniwase";
// var lName="Mireille";

// var a= fName.toUpperCase();
// var b= lName.toLowerCase();
// console.log(a);
// console.log(b);


///string NaN

// var name = "Andrea";
// var nonsense = parseInt(name);
// nonsense;
// console.log(nonsense);

///string prompt
// var mySchool = prompt("Where do you go to school?");
// mySchool;
// console.log(mySchool);


/// string prompt with upper case
// var mySchool= prompt("Are you ready to code?").toUpperCase();
// console.log(mySchool);

//string comfirm
//  var mySchool = confirm("Would you like to continue?");
// console.log(mySchool);

///prompt ages

// var age = prompt("Enter your age: ");
//  var sum = age + age;
//  console.log(sum);


/// parse string
// var number = parseInt("5");
//  number;
//  console.log(number);

/// function  prompt , parse string
// var inputtedAge = prompt("Enter your age: ");
// var age = parseInt(inputtedAge);
// age + age;
// console.log(age);

/// parsefloat function
// var pi = "3.14";
//  parseFloat(pi);
//  console.log(pi);

// var saySomething = function(whatToSay) 
// {
//     alert(whatToSay);
//     };
//     console.log(saySomething);

//     var add = function(number1, number2) 
//     {
//     return number1 + number2;
//     };
   
//     console.log(add);


// var add = function(number1, number2)
//  {
//     return 2 + 4;
//   }
//   console.log("return");


  /// function and parseint 
// var add = function(number1, number2) {
//     return number1 + number2;
//   };
//   var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   alert(add(number1, number2));
//   console.log(add);

///if statements
// var enoughSleep = true;
// if (enoughSleep) {
//   console.log("I'm ready to go!");
// } else {
//   console.log("I need a nap.");
// }


// var temperature = 15;

// if (temperature < 15) 
// {
//     console.log("Don't forget a jacket!");
//   } else if (temperature < 25) {
//     console.log("Have a nice day :)");
//   } else {
//     console.log("Keep cool today!");
//   }

// var temperature = 10;
// var raining = true;
// if (temperature < 0) {
//   console.log("Brr! Don't freeze out there!");
// }else if (temperature < 15 || /*&&*/ raining === true) {
//   console.log("Don't forget a jacket!");
// } else if (temperature < 25) {
//  console.log("Have a nice day :)");
// } else {
//  console.log("Keep cool today!");
// }
  
///arrays
// var greetings = [];
//  greetings.push('hi');
// greetings.push('hello');
//  greetings;
// console.log(greetings);


var originalArray = [1,2,3,4,5];
var cloneArray = originalArray;
cloneArray.push(6);

console.log(cloneArray);