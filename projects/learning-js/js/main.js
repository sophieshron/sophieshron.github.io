var myName = 'sophie';
var myLastName = 'shron';
var myNumber = 24;
var myNumberString = '24';
var boolean = true;
var myLetterArray = ['s', 'o', 'p', 'h', 'i', 'e'];
var myArray = ['sophie', 2020, false];
var myFullName = 'sophie' + 'shron';
var math = 40 + 60;
var longWord = 'supercalifragilisticexpialidocious';
var students = [
  'Vee',
  'Sophia',
  'Malini',
  'Ethan',
  'Nicole',
  'Ani',
  'Sarah',
  'Ivy',
  'Hunter',
  'Emily',
  'Daniela',
  'Carly',
  'Sophie',
  'Allison',
  'Germaine'
];

var date = new Date();
var hour = date.getHours();

var studentsToday = 14;

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[date.getDay()];

var myRestaurants = [' Baba Louies ', ' Claudias ', ' Gerties '];
var myAnimals = [' Dogs ', ' Cows ', ' Hogs '];
var myPlaces = [' 442 Lorimer ', ' Washington Sq ', ' Pier 35 '];
var myPokemon = [' Clefairy ', ' Psyduck ', ' Chansey '];

var allMyFaves = [myRestaurants + myAnimals + myPlaces + myPokemon];

console.log (myName);
console.log (myNumber);
console.log (myNumberString);
console.log (boolean);
console.log (myLetterArray);
console.log (myArray);
console.log (myFullName);
console.log (math);

console.log (myLetterArray [0]);
console.log (myLetterArray [myLetterArray.length - 1]);

console.log (longWord.length);

//Log the result of this expression: the length of characters in your first name is equal to the length of characters in your last name.
console.log (myName.length = myLastName.length);

//Create a conditional statement that does the following: 
//if all students are here log a message that says all the students are in class
//Otherwise, log a message that says not everyone is here


if (studentsToday == students.length) {
  console.log  ('all the students are in class');
} else {
  console.log ('not everyone is here');
}



// Create a for loop that loops through the array of characters in your first name and logs each character.

for ( var i = 0; i < myLetterArray.length; i++ ) {
  console.log( myLetterArray[i] + ' is # ' + i );
}

//Create a conditional statement that checks to see if the current time is between 7pm and 9:40pm.

if (hour > 19 && hour < 21) {
  console.log  ('it is between 7 and 9:40 pm');
} else {
  console.log ('it is not between 7 and 9:40 pm');
}

//Create a conditional statement with multiple conditions that checks to see what 
//the current date it is, and logs a unique message for each day of the week.

if ( n == "Monday" ) {
  console.log("Its Monday!");
} 
else if ( n == "Tuesday" ) {
  console.log("club goin up on a tuesday");
} 
else if ( n == "Wednesday" ) {
  console.log("hump day wednesday");
 } 
  else if ( n == "Thursday" ) {
  console.log("silly Thursdays");
 }
  else if ( n == "Friday" ) {
  console.log("Last friday night");
 } 
  else if ( n == "Saturday" ) {
  console.log("Saturday for the boys");
 }
else if ( n == "Sunday" ) {
  console.log("Sunday is laundry day");
 }
else {
  console.log("carpe diem");
 }


//Create an array of arrays consisting of the variables from the previous question. 
//Define a variable to hold this array of arrays.

console.log (allMyFaves);

//Loop through your array of arrays and log the value of the each item in the array. 
//You should be looping through 4 things, and each value you log should be an array. 
//For example, the first item logged would be an array containing 3 restaurants, 
//the second item would be an array containing 3 animals, etc.

var loopFaves = [
  myRestaurants,
  myPokemon,
  myPlaces,
  myAnimals,
];

for ( var i = 0; i < loopFaves.length; i++ ) {
  console.log( loopFaves[i] + ' is # ' + i );
}

//Create a nested for loop that loops through the array of your favorite items 
//and logs each individual item. The first loop should log the category of the item, 
//while the nested loop should log each individual item in that category.

for ( var i = 0; i < loopFaves.length; i++ ) {
  console.log( loopFaves[i] + ' is # ' + i );
}


for (var i = 1; i < loopFaves.length; ++i) {

   // codes inside the body of outer loop

   for (var j = 1; j < loopFaves.length; ++j) {
      // codes inside the body of both outer and inner loop
   }

   // codes inside the body of outer loop
}


