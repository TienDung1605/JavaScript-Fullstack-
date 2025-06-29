/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilas';
let first = 'Jonas';
let firstNamePerson
let first_name_person
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matila = 'JM'
let $function = 27;
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

let $dollar = 1;
let _private = 'yes';


// Excercise 1: Values and Variables
// 1. Declare variables called country, continent, and population and assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = 'England';
let continent = 'Europe';
let population = 68;
console.log(country);
console.log(continent);
console.log(population);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun)
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// Excercise 2: Data Types
// 1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value.
//also declare a variable called language, but don't assign it any value yet
let isIsland = false;
let population = 100;
let country = 'VietNam';
let languge = ' Vietnamese';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof languge);
*/

// let age = 25;
// age = 30;

// const birthYear = 2000;
// // birthYear = 1991;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Dung'
// console.log(lastName);

// Excercise 3: Let, Const and Var
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the const variables to see what happens
// let language = 'Vietnamese';
// const country = 'VietNam';
// const firstName = 'Dung';
// let agePerson = 25;
// console.log(language);
// console.log(country);
// console.log(firstName);
/*
// Math operators
const now = 2025;
const ageDung = now - 2000;
const ageLy = now - 2001;
console.log(ageDung * 2, ageDung / 10, 2 ** 3);
// 2** 3 means 2 to the power of 3 = 2*2*2

console.log(ageLy);
console.log(ageDung, ageLy);

const firstName = 'Tran';
const lastName = 'Dung';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10 // x = x + 10; // 25
x *= 4; // x = x * 4; // 100
x++; // x = x + 1; // 101
x--; // x = x - 1; // 100
x--; // x = x - 1; // 99
console.log(x);

// comparison operators
console.log(ageDung > ageLy); // >, <, >=, <=
console.log(ageLy >= 24); // >, <, >=, <=

const isFullAge = ageLy >= 24;

console.log(now - 2000 > now - 2001);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
*/
/*
  Coding Chanllenge #1
  Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
  BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 1. Store Mark's and John's mass and height in variables
 2. Calculate their BMI using the formula (you can even implement both versions)
  3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

  test data:
   data1: Mark: mass = 78 kg, height = 1.69 m; John: mass = 92 kg, height = 1.95 m
   data2: Mark: mass = 95 kg, height = 1.88 m; John: mass = 85 kg, height = 1.76 m


const markMass = 78; // kg
const markHeight = 1.69; // m
const johnMass = 92; // kg
const johnHeight = 1.95; // m

const markMass2 = 95; // kg
const markHeight2 = 1.88; // m
const johnMass2 = 85; // kg
const johnHeight2 = 1.75; // m

const caculateMarkBMI = markMass / (markHeight * markHeight);
const caculateJohnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = caculateMarkBMI > caculateJohnBMI;

const caculateMarkBMI2 = markMass2 / markHeight2 ** 2;
const caculateJohnBMI2 = johnMass / johnHeight2 ** 2;
const markHigherBMI2 = caculateMarkBMI2 > caculateJohnBMI2;

console.log('data1', caculateMarkBMI, caculateJohnBMI);
console.log('data1', markHigherBMI);

console.log('data2', caculateMarkBMI2, caculateJohnBMI2);
console.log('data2', markHigherBMI2);
*/
/*
  Coding Challenge #2
  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
  Your tasks:
  1. Print a nice output to the console, saying who has the higher BMI.
     The message should include both their names and their BMI values.
     Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
  2. Create a variable 'averageBMI' containing both their average BMI value.
  3. For each of them, create a variable 'isHigherThanAverage' containing information about whether the person's BMI is higher than the average BMI.


const averageBMI = (caculateMarkBMI + caculateJohnBMI) / 2;
const isMarkHigherThanAverage = caculateMarkBMI > averageBMI;
const isJohnHigherThanAverage = caculateJohnBMI > averageBMI;
console.log('Average BMI:', averageBMI);
console.log(`Mark's BMI (${caculateMarkBMI}) is higher than John's (${caculateJohnBMI})!`);
console.log(`Is Mark's BMI higher than average? ${isMarkHigherThanAverage}`);
console.log(`Is John's BMI higher than average? ${isJohnHigherThanAverage}`);
 */


/*
const firstName = 'Tran';
const job = 'Programmer';
const birthYear = 2000;
const currentYear = 2025;
const Dung = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

console.log(Dung);

const DungNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(DungNew);

console.log(`just a regular string...`);

console.log('String with \n\
   mutiple \n\
   line')

console.log(`String
   multiple
   line`)
*/
/*
const age = 25;

if (age >= 18) {
   console.log('Dung can start driving license 🚗');
} else {
   const yearsLeft = 18 - age;
   console.log(`Dung is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2000;

let century
if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}

console.log(century)
*/
/*Coding Challenge #2
  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
  Your tasks:
  1. Print a nice output to the console, saying who has the higher BMI.
     The message should include both their names and their BMI values.
     Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
  2. Create a variable 'averageBMI' containing both their average BMI value.
  3. For each of them, create a variable 'isHigherThanAverage' containing information about whether the person's BMI is higher than the average BMI.
  */
/*
const markMass = 78; // kg
const markHeight = 1.69; // m
const johnMass = 92; // kg
const johnHeight = 1.95; // m
const caculateMarkBMI = markMass / (markHeight * markHeight);
const caculateJohnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = caculateMarkBMI > caculateJohnBMI;

if (caculateMarkBMI > caculateJohnBMI) {
   console.log(`Mark's BMI (${caculateMarkBMI}) is higher than John's (${caculateJohnBMI})!`);
} else {
   console.log(`John's BMI (${caculateJohnBMI}) is higher than Mark's (${caculateMarkBMI})!`);
}
   */
/*
// typeof conversion
const inputYear = '2000'
console.log(Number(inputYear) + 18); // Convert string to number
console.log(inputYear + 18);

console.log(Number('Dung'))
console.log(typeof NaN); // Not a Number

console.log(String(23))

// Type coercion
console.log('I am' + 23 + ' years old') // Implicit conversion
console.log('23' - '10' - 3); // Implicit conversion, string to number
console.log('23' / '2'); // Implicit conversion, string concatenation

let n = '1' + 1;
n = n - 1; // Implicit conversion, string to number
console.log(n); // 10
*/
/*
// 5 falsey values: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean('Dung'))
console.log(Boolean(undefined))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100;
if (money) {
   console.log("Don't spend it all ;)");
} else {
   console.log('You should get a job!');
}

let hight = 123;
if (hight) {
   console.log('Yay! Height is defined');
} else {
   console.log('Height is UNDEFINED');
}

if (typeof height !== "undefined") {
   console.log("YAY! Height is defined");
}
*/
/*
const age = 18
if (age === 18)
   console.log('You just became an adult :D (strict)');

if (age == 18)
   console.log('You just became an adult :D (looose)');

const favouriteNumber = Number(prompt('What your favourite number?'));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
   console.log('Cool! 23 is an amazing number!');
} else if (favouriteNumber === 7) {
   console.log('7 is also a cool number');
} else if (favouriteNumber === 9) {
   console.log('9 is also a cool number');
} else {
   console.log('Number is not 23 or 7');
}

if (favouriteNumber !== 23) {
   console.log('Why not 23?');
}

if (favorite === 23) {
   console.log("Cool! 23 is an amazing number!");
}
*/
/*
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);// AND operator
console.log(hasDriverLicense || hasGoodVision);// OR operator
console.log(!hasDriverLicense);// NOT operator

const shouldDriver = hasDriverLicense && hasGoodVision;

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && !isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
   console.log('Sarah is able to drive!');
} else {
   console.log('Someone else should drive...');
}
*/

/*
   Coding Challenge #3
   There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
   1. Calculate the average score for each team, using the test data below
   2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
   Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
   3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
   Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
   4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

   test data:
   Data 1: Dolphins score = 96, 108, 89; Koalas score = 88, 91, 110
   Data Bonus 1: Dolphins score = 97, 112, 101; Koalas score = 109, 95, 123
   Data Bonus 2: Dolphins score = 97, 112, 101; Koalas score = 109, 95, 106
*/
/*
// 1.
const dolphinsAvg1 = (96 + 108 + 89) / 3;
const koalasAvg1 = (88 + 91 + 110) / 3;
console.log(dolphinsAvg1, koalasAvg1);
// Bonus 1.
const dolphinsAvg2 = (97 + 112 + 101) / 3;
const koalasAvg2 = (109 + 95 + 123) / 3;
console.log(dolphinsAvg2, koalasAvg2);

// Bonus 2.
const dolphinsAvg3 = (97 + 112 + 101) / 3;
const koalasAvg3 = (109 + 95 + 106) / 3;
console.log(dolphinsAvg3, koalasAvg3);

// 2.
if (dolphinsAvg1 > koalasAvg1) {
   console.log(`Dolphins1 win with average score of ${dolphinsAvg1} vs ${koalasAvg1}`);
} else if (koalasAvg1 > dolphinsAvg1) {
   console.log(`Koalas1 win with average score of ${koalasAvg1} vs ${dolphinsAvg1}`);
} else {
   console.log(`It's a draw with average score of ${dolphinsAvg1}`);
}

if (dolphinsAvg2 > koalasAvg2) {
   console.log(`Dolphins2 win with average score of ${dolphinsAvg2} vs ${koalasAvg2}`);
} else if (koalasAvg2 > dolphinsAvg2) {
   console.log(`Koalas2 win with average score of ${koalasAvg2} vs ${dolphinsAvg2}`);
} else {
   console.log(`It's a draw with average score of ${dolphinsAvg2}`);
}

if (dolphinsAvg3 > koalasAvg3) {
   console.log(`Dolphins3 win with average score of ${dolphinsAvg3} vs ${koalasAvg3}`);
} else if (koalasAvg3 > dolphinsAvg3) {
   console.log(`Koalas3 win with average score of ${koalasAvg3} vs ${dolphinsAvg3}`);
} else {
   console.log(`It's a draw with average score of ${dolphinsAvg3}`);
}
// 3.
const minScore = 100;
if (dolphinsAvg1 >= minScore && dolphinsAvg1 > koalasAvg1) {
   console.log(`Dolphins win with average score of ${dolphinsAvg1} vs ${koalasAvg1}`);
} else if (koalasAvg1 >= minScore && koalasAvg1 > dolphinsAvg1) {
   console.log(`Koalas win with average score of ${koalasAvg1} vs ${dolphinsAvg1}`);
} else if (dolphinsAvg1 >= minScore && koalasAvg1 >= minScore && dolphinsAvg1 === koalasAvg1) {
   console.log(`It's a draw with average score of ${dolphinsAvg1}`);
}


if (dolphinsAvg2 >= minScore && dolphinsAvg2 > koalasAvg2) {
   console.log(`Dolphins win with average score of ${dolphinsAvg2} vs ${koalasAvg2}`);
} else if (koalasAvg2 >= minScore && koalasAvg2 > dolphinsAvg2) {
   console.log(`Koalas win with average score of ${koalasAvg2} vs ${dolphinsAvg2}`);
} else if (dolphinsAvg2 >= minScore && koalasAvg2 >= minScore && dolphinsAvg2 === koalasAvg2) {
   console.log(`It's a draw with average score of ${dolphinsAvg2}`);
}


if (dolphinsAvg3 >= minScore && dolphinsAvg3 > koalasAvg3) {
   console.log(`Dolphins win with average score of ${dolphinsAvg3} vs ${koalasAvg3}`);
} else if (koalasAvg3 >= minScore && koalasAvg3 > dolphinsAvg3) {
   console.log(`Koalas win with average score of ${koalasAvg3} vs ${dolphinsAvg3}`);
} else if (dolphinsAvg3 >= minScore && koalasAvg3 >= minScore && dolphinsAvg3 === koalasAvg3) {
   console.log(`It's a draw with average score of ${dolphinsAvg3}`);
} else {
   console.log('No one win the trophy')
}
   */
/*
const day = 'monday';

switch (day) {
   case 'monday':
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;

   case 'tuesday':
      console.log('Prepare theory videos');
      break;
   case 'wednesday':
   case 'thursday':
      console.log('Write code examples');
      break;
   case 'friday':
      console.log('Record videos');
      break;
   case 'saturday':
   case 'sunday':
      console.log('Enjoy the weekend');
      break;
   default:
      console.log('Not a valid day!');
}

if (day === 'monday') {
   console.log('Plan course structure');
   console.log('Go to coding meetup');
} else if (day === 'tuesday') {
   console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
   console.log('Write code examples');
} else if (day === 'friday') {
   console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
   console.log('Enjoy the weekend');
} else {
   console.log('Not a valid day!');
}

*/
/*
3 + 4
2000
true && false && !false;

if (23 > 10) {
   const str = '23 is bigger';
}

const me = 'Tran Dung';
console.log(`I'm ${2025 - 2000} years old ${me}`)
*/

const age = 25;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💦');

const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink);

let drink2
if (age >= 18) {
   drink2 = 'wine 🍷';
} else {
   drink2 = 'water 💦';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);


