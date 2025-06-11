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
