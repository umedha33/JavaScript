// console log and alert test ---------------------------------------------
// get element by id with text content ---------------------------------------------

// console.log(`Hellow mthfk`);
// console.log(`fuck you tony`);

// window.alert(`damn son`);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `JavaScript`;


// asigning and declaring variables ---------------------------------------------
// console log strings with variable ---------------------------------------------

// let age = 20;
// let price = 1230;
// let gpa = 3.2;

// console.log(`You are ${age} years old`);
// console.log(`The price of this product is ${price}LKR`);
// console.log(`Your GPA is ${gpa}`);

// let name = "umedha";
// let forsale = true;

// console.log(typeof name);
// console.log(`my name is ${name}`);

// console.log(typeof forsale);
// console.log(`this car for sale: ${forsale}`);

// let fullName = "umedha rajaratne";
// let age = 21;
// let student = false;

// document.getElementById("p1").textContent = `name is: ${fullName}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;


// arithmetic operators ---------------------------------------------------------

// let students = 31;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 3;
// let extrastudents = students % 3;

// console.log(students);
// console.log(extrastudents);

// students += 3;
// students -= 3;
// students *= 3;
// students /= 3;
// students **= 3;
// students %= 3;

// students++;
// students--;

// console.log(students);


// accept user input --------------------------------------------------------------
// simple way (window prompt) --------------------------------------------------------------

// let username;

// username = window.prompt("what is your name?");
// console.log(username);
// document.getElementById("h1").textContent = username;

// professional way (html textbox) --------------------------------------------------------------

// let username;

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("username").value;
//     document.getElementById("h1").textContent = `fuck you ${username}`;
// }


// type convertion --------------------------------------------------------------

// let age = window.prompt("how old r u nig?");
// age = Number(age);
// age ++;
// console.log(age, typeof age);

// let x = "10";
// let y = 10;
// let z ="";

// x = Number(x);
// y = String(y);
// z = Boolean(z); // can be used to check if user entered a value - turns false if not entered

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const - a variable that cant be changed --------------------------------------------------------------

// const PI = 3.14159;
// let radius;
// let circum;

// radius = window.prompt('enter radius value');
// radius = Number(radius);
// circum = 2 * PI * radius;

// console.log(circum);


// counter program --------------------------------------------------------------

// const decreaseBtn = document.getElementById("decreasBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function () {
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function () {
//     count--;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function () {
//     count = 0;
//     countLabel.textContent = count;
// }


// Math -built in object --------------------------------------------------------------

// console.log(Math.PI);
// console.log(Math.E);

// let x = Math.PI;
// let a = 2;
// let b = 4;
// let c = -6;
// let y = 2;
// let z;

// // z = Math.round(x);
// // z = Math.floor(x);
// // z = Math.trunc(x);
// // z = Math.pow(a, b);
// // z = Math.sqrt(a);
// // z = Math.abs(c);
// // z = Math.max(x, a, b, c, y);
// // z = Math.min(x, a, b, c, y);

// console.log(z)


// random number generator --------------------------------------------------------------

// let randumNum = Math.floor(Math.random() * 6) + 1;

// const MIN = 50;
// const MAX = 100;

// let randumNum = Math.floor(Math.random() * (MAX - MIN)) + MIN;

// console.log(randumNum);

// const rollBtn = document.getElementById("myBtn");
// const lb1 = document.getElementById("lb1");
// const lb2 = document.getElementById("lb2");
// const lb3 = document.getElementById("lb3");
// const diceMin = 1;
// const diceMax = 6;
// let randNum1;
// let randNum2;
// let randNum3;

// rollBtn.onclick = function (){
//     randNum1 = Math.floor(Math.random() * diceMax) + diceMin;
//     lb1.textContent = randNum1;

//     randNum2 = Math.floor(Math.random() * diceMax) + diceMin;
//     lb2.textContent = randNum2;

//     randNum3 = Math.floor(Math.random() * diceMax) + diceMin;
//     lb3.textContent = randNum3;
// }



// if statements ----------------------------------------------------------------------------

// let age = 21;

// if (age >= 18){
//     console.log("fuck you tony");
// } else {
//     console.log("wha issyo naim??");
// }

// let isStudent = true;

// if (isStudent) {
//     console.log("you are a student");
// } else {
//     console.log("youre not a student");
// }

// let age = 21;

// if (age >= 100) {
//     console.log("you cant enter you dumbass");
// } else if (age == 0) {
//     console.log("you cant enter youre 0");
// } else if (age >= 18){
//     console.log("you can enter here");
// } else if (age < 0) {
//     console.log("need to be born before entering");
// } else {
//     console.log("you should be older than 18");
// }



// checked property - checking state of html checkbox, radio btn element ----------------------------------------------------------------------------

// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const masterbtn = document.getElementById("masterbtn");
// const paypal = document.getElementById('paypal');
// const submitbtn = document.getElementById("submitbtn");
// const subresult = document.getElementById("subresult");
// const paymentresult = document.getElementById("paymentresult");

// submitbtn.onclick = function () {
//     if (mycheckbox.checked) {
//         subresult.textContent = "Thank you for subscribing!";
//     } else {
//         subresult.textContent = "please subscribe!";
//     }

//     if (visabtn.checked) {
//         paymentresult.textContent = "You have selected visa";
//     } else if (masterbtn.checked) {
//         paymentresult.textContent = "You have selected master";
//     } else if (paypal.checked) {
//         paymentresult.textContent = "You have selected paypal";
//     } else {
//         paymentresult.textContent = "select a payment method";
//     }
// }



// ternary operator - condition ? codeIfTrue : codeIfFalse; ----------------------------------------------------------------------------

// let age = 21;
// let message = age >=18 ? "youre eligible" : "youre not eleigible";
// console.log(message);

// let isStudent = true;
// let message = isStudent ? "youre a student" : "youre not a student";
// console.log(message);

// let purchaseAmount = 126;
// let discount = purchaseAmount >= 100 ? 50 : 0;
// console.log(`Your total price will be: ${(purchaseAmount - (purchaseAmount * (discount / 100)))} LKR`);



// switch operator - case 1 case 2 ----------------------------------------------------------------------------

// let day = 2;

// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("wednesday");
//         break;
//     case 3:
//         console.log("friday");
//         break;
//     default:
//         console.log("unknown day");
// }



// String Methods -----------------------------------------------------------------------------------------------

// let username = 'Umedha ';
// let spacename = '    umedha      ';
// let fullname = 'Umedha Rajaratne';
// let phoneNumber = '+94722666900';

// console.log(username.charAt(0));
// console.log(username.indexOf("e"));
// console.log(username.lastIndexOf("h"));
// console.log(username.length);
// console.log(spacename);
// console.log(spacename.trim());
// console.log(username.toUpperCase());
// console.log(username.repeat(5));

// let result = username.startsWith(" ");
// console.log(result? "Cant have space before name" : "Name is clear");

// let result2 = username.endsWith(" ");
// console.log(result2? "Cant have space after name" : "Name is clear");

// let result3 = fullname.includes(" ");
// console.log(result3? "Cant have space between name" : "Name is clear");

// let result4 = phoneNumber.replaceAll("+94", "0");
// console.log(result4);

// let result5 = phoneNumber.padStart(15, "*");
// console.log(result5);

// let result6 = phoneNumber.padEnd(15, "*");
// console.log(result6);



// Slice -----------------------------------------------------------------------------------------------

// let fullname = "Umedha Rajaratne";

// const firstname = fullname.slice(0, fullname.indexOf(" "));
// const lastname = fullname.slice(fullname.indexOf(" ") + 1);
// console.log(firstname);
// console.log(lastname);

// const email = window.prompt("Enter your email");

// const username = email.slice(0, email.indexOf("@"));
// const mailType = email.slice(email.indexOf("@") + 1, email.indexOf("."));

// console.log(username);
// console.log(mailType);



// Method Chaining -----------------------------------------------------------------------------------------------
// calling one method after another (in one continous line of code) -----------------------------------------------------------------------------------------------

// ------------- No Method Chaining ---------------------------------------------------
// let getUsername = window.prompt("Enter your username");
// getUsername = getUsername.trim();

// let firstChar = getUsername.charAt(0);
// firstChar = firstChar.toUpperCase();

// let otherChar = getUsername.slice(1);
// otherChar = otherChar.toLowerCase();

// let username = firstChar + otherChar;
// console.log(username);

// ------------- With Method Chaining ---------------------------------------------------
// let username = window.prompt("Enter your username");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);



// Logical operators -----------------------------------------------------------------------------------------------
// AND = &&
// OR = ||
// NOT = !

// const temp = 30;
// const isSunny = true;

// if(temp <= 30 && temp >= 10){
//     console.log("considers both statements to be true");
// } else {
//     console.log("-------");
// }

// if(temp == 30 || temp == 10){
//     console.log("considers either statements to be true");
// } else {
//     console.log("-------");
// }

// if(!isSunny){
//     console.log("It is sunny");
// } else {
//     console.log("It is cloudy");
// }



// equal sign = == === != !== -----------------------------------------------------------------------------------------------

// = assignment operator
// == comparison operator (only compares with the value)
// === strict equality operator (compares with bot value and data type)
// != inequality operator (not equal (value))
// !== strict inequality operator (not equal (value + datatype))



// While loops -----------------------------------------------------------------------------------------------

// let username = "";

// while (username === "" || username === null){
//     username = window.prompt(`Enter a username`);
// }
// console.log(`hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);
//     password = Number(password);

//     if(username === "umedha" && password === 3354){
//         console.log(`Logged in successfully`);
//         loggedIn = true;
//     } else {
//         console.log(`Invalid credentials!`);
//     }
// }



// For loops -----------------------------------------------------------------------------------------------

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }
// console.log("Happy New Year");

// for(let i = 1; i <= 20; i++){
//     if(i == 10){
//         continue; //continue will skip the line and print the rest
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 10; i++){
//     if(i == 10){
//         break;
//     } else {
//         console.log(i);
//     }
// }
// console.log("OMG");



// NUMBER GUESSING GAME -----------------------------------------------------------------------------------------------

// const minNum = 1;
// const maxNum = 10;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//     guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert("Please enter a number!");
//     } else if (guess > maxNum || guess < minNum){
//         window.alert(`Make sure to enter between ${minNum} - ${maxNum}`);
//     } else {
//         attempts++
//         if (guess < answer){
//             window.alert("Your guess is lower than the answer");
//         } else if (guess > answer) {
//             window.alert("Your guess is greater than the answer");
//         } else {
//             window.alert(`Great! your answer is correct, it took ${attempts} attempts for you to guess!`);
//             running = false;
//         }
//     }
// }



// FUNCTIONS -----------------------------------------------------------------------------------------------

// function happyBday(name, age){
//     console.log(`Happy birthday ${name}, you are ${age} years old!`);
// }
// happyBday("Umedha", 22);

// function add(x, y) {
//     let result = x + y;
//     return result;
// }
// console.log(add(2, 3));

// function add(x, y) {
//     return x+y;
// }
// console.log(add(2, 3));

// function isEven(number){
//     if (number % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(11));

// function isEven(number){
//     return number % 2 === 0 ? true : false;
// }
// console.log(isEven(10));

// function isValid(email){
//     return email.includes("@") ? true : false;
// }
// console.log(isValid("umedha@gmail.com"));
// console.log(isValid("umedhagmail.com"));



// Variable Scope -----------------------------------------------------------------------------------------------
//Global -----------------------------------------------------

// let x = 15;
// func1();
// func2();

// function func1(){
//     console.log(x);
// }
// function func2(){
//     console.log(x);
// }

//Local -----------------------------------------------------

// func1();
// func2();

// function func1(){
//     let x = 10;
//     console.log(x);
// }
// function func2(){
//     let x = 20;
//     console.log(x);
// }



// Temperature Convetion Program -----------------------------------------------------------------------------------------------
// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let tempInput;

// function convert() {

//     if (toFahrenheit.checked) {
//         tempInput = Number(textBox.value);
//         tempInput = (tempInput * 9 / 5) + 32;
//         result.textContent = tempInput.toFixed(1) + "℉";
//     } else if (toCelsius.checked) {
//         tempInput = Number(textBox.value);
//         tempInput = (tempInput - 32) * 5 / 9
//         result.textContent = tempInput.toFixed(1) + "℃";
//     } else {
//         result.textContent = "Select a unit first";
//     }
// }



// Arrays -----------------------------------------------------------------------------------------------

// let fruits = ["orange", "mango", "banana", "watermelon"];

// fruits[1] = "grape";
// fruits.push("strawberry"); //add to the end
// fruits.pop(); //remove from the end
// fruits.unshift("watermelon"); // add to the front
// fruits.shift(); // remove from the front

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// console.log(fruits.length);
// console.log(fruits.indexOf("grape"));


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for (let fruit of fruits){
//     console.log(fruit);
// }



// Spread operator -----------------------------------------------------------------------------------------------
// unpacks the element of arrays and strings ----------------------------------------

// let numbers = [1, 2, 3, 4, 5];

// let maxNum = Math.max(...numbers);
// let minNum = Math.min(...numbers);

// console.log(maxNum);
// console.log(minNum);

// let myName = "Umedha";
// let leters = [...myName].join("-");

// console.log(leters);

// let fruits = ["apple", "orange", "watermelon"];
// let vegetables = ["potato", "salad"];

// let newFruits = [...fruits, ...vegetables,"strawberry"];

// console.log(newFruits);



// Rest operator -----------------------------------------------------------------------------------------------
// joins the seperate elements into an array ----------------------------------------

// function insideBasket(...food){ //this is rest operator
//     console.log(food);
//     console.log(...food); //this is spread operator
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "pasta";
// const food5 = "sushi";

// insideBasket(food1, food2, food3, food4, food5);

// function getFood(...food){
//     return food; //this returns an array
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "pasta";
// const food5 = "sushi";

// const food = getFood(food1, food2, food3, food4, food5);
// console.log(food);


// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 2, 3, 4, 5);

// console.log(`The total is: ${total}LKR`);

// function average(...numbers) {
//     let result = 0;
//     let sum = 0;
//     for (let number of numbers) {
//         result = (sum += number) / numbers.length;
//     }
//     return result;
// }

// const avg = average(50, 60, 70, 80);

// console.log(`Your average score is: ${avg}`);

// function getAverage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result / numbers.length;
// }

// const avg = getAverage(50, 60, 70, 80);

// console.log(`The average is: ${avg}`);

// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const fullName = combineStrings("Umedha", "Chethiya", "Rajaratne");

// console.log(fullName);



// Dice Roller Program -----------------------------------------------------------------------------------------------

// function rollDice() {
//     const numInput = document.getElementById("numInput");
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     let input = numInput.value;
//     input = Number(input);

//     for (let i = 1; i <= input; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="images/Dice-${value}.png" alt="Dice-${value}">`);
//     }
//     diceResult.textContent = values.join(", ");
//     diceImages.innerHTML = images.join(" ");
// }




// Random Password Generator Program -----------------------------------------------------------------------------------------------

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "1234567890";
//     const symbolChars = "!@#$%^&*()_+-=<>?/";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if(length <= 0){
//         return `(Password length should be at least 5!)`;
//     }

//     if(allowedChars.length === 0){
//         return `(At least one set of characters must be chosen)`;
//     }

//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
//     return password;
// }

// const passwordLength = 20;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

// console.log(`Password: ${password}`);

//--------------------------------------------------------------------------------------------------------------

// function randomPasswordGen(plength) {

//     const allChars = "qwertyuiopasdfghjkl;zxcvbnm,.'][=-0987654321!@#$%^&*()";
//     let finalPassword = "";

//     for (let i = 1; i <= plength; i++) {
//         let genPass = allChars.charAt(Math.floor(Math.random() * allChars.length));
//         finalPassword += genPass;
//     }

//     return finalPassword;
// }

// const pLength = window.prompt("Enter required password length");
// console.log(`Your Password is: ${randomPasswordGen(pLength)}`);



// Callaback -----------------------------------------------------------------------------------------------
// a function that is passed as an argument to another function -----------------------------------------------------------------------------------------------

// function greeting(callback){
//     callback(); // this line takes the parameter and calls it...
//     console.log("Umedha");
// }

// function hello(){
//     console.log("Hello");
// }

// function wait(){
//     console.log("Wait");
// }

// function wssup(){
//     console.log("Whats up");
// }

// greeting(hello);


// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function sub(callback, x, y){
//     let result = x - y;
//     callback(result);
// }

// function displayPage(result){
//     document.getElementById("myh1").textContent = result;
// }

// sub(displayPage, 5, 10);



// forEach() -----------------------------------------------------------------------------------------------
// Method used to itterate callbacks over the elements of an array -----------------------------------------------------------------------------------------------
// in here element, index, and array is provided automaticaly {has to be in the order}
// The length of the new array will be the same as the original array.....

// let numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(double);
// // numbers.forEach(triple);
// // numbers.forEach(square);
// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function triple(element, index, array) {
//     array[index] = element * 3;
// }

// function square (element, index, array) {
//     array[index] = Math.pow(element, 2);
// }

// function cube (element, index, array) {
//     array[index] = Math.pow(element, 3);
// }

// function display(element) {
//     console.log(element);
// }

// let fruits = ["apple", "strawberry", "mango", "pineapple"];

// // fruits.forEach(toUpper);
// fruits.forEach(firstUpper);
// fruits.forEach(display);

// function toUpper(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function firstUpper(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }



// .map() -----------------------------------------------------------------------------------------------
// same this as the forEach() but returns a new array -----------------------------------------
// The length of the new array will be the same as the original array.....

// const numbers = [1, 2, 3, 4, 5];

// const newArray = numbers.map(square);
// const newArray = numbers.map(cube);

// console.log(`Answer is: ${newArray}`);
// console.log(`Original is: ${numbers}`);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// const students = ["Umedha", "Nishmi", "Shavinda", "Onel"];

// const afterUpper = students.map(toUpper);
// console.log(afterUpper);

// function toUpper(element){
//     return element.toUpperCase();
// }

// const dates = ["2024-01-10","2025-2-20","2026-3-30"];

// console.log(dates.map(formatDates));

// function formatDates(element){
//     const parts = element.split("-");
//     // now each element is split to three elements...
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
//     // [0] = year   [1] = month   [2] = day....
// }



// .filter() -----------------------------------------------------------------------------------------------
// creates a new array by filtering out elements ------------------------------------------
//The length of the new array may be different from the original array, as it depends on how many elements satisfy the condition.....

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let evenNumbers = numbers.filter(isEven);
// let evenNumbers = numbers.filter(isOdd);

// console.log(evenNumbers);

// function isEven(element) {
//     return element % 2 === 0;
// }

// function isOdd(element) {
//     return element % 2 !== 0;
// }


// const ages = [16, 17, 18, 20, 25, 30, 50, 60];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);

// console.log(adults);
// console.log(children);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

// const words = ["apple","strawberry","pineapple","mango"];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);

// console.log(shortWords);
// console.log(longWords);

// function getShortWords(element){
//     return element.length < 6;
// }

// function getLongWords(element){
//     return element.length >= 6;
// }



// .reduce() -----------------------------------------------------------------------------------------------
// reduces the elements of an array to a single value ---------------------
// accumulator, element...

// const prices = [10, 20, 30, 40, 50, 50, 40, 30, 20, 10];

// const total = prices.reduce(sum);
// console.log(`${total}LKR`);

// function sum(accum, element){
//     return accum + element;
// }

// const grades = [60, 70, 80, 90];

// const maxGrade = grades.reduce(max);
// const minGrade = grades.reduce(min);

// console.log(`Max is: ${maxGrade}, Min is: ${minGrade}`);

// function max(accum, element){
//     return Math.max(accum, element);
// }

// function min(accum, element){
//     return Math.min(accum, element);
// }



// function expressions -----------------------------------------------------------------------------------------------
// a way to define functions as values or variable
// usefull wehn we want to define functions which will be used only once...
// function name will be unneccessary.
// .map() .filter() .reduce() etc...

// const hello = function(){
//     console.log("Hello");
// }

// hello();

// setTimeout(callbackFunction, delay); // this is a function, used to execute after a delay.

// function sayHello() {
//     console.log("Hello, setTimeout!");
// }

// // Call sayHello() after a delay of 2000 milliseconds (2 seconds)
// setTimeout(sayHello, 2000);

// setTimeout(function () {
//     console.log("Hello with expressions");
// }, 2500);


// practice with function decleration method.........
// const numbers = [1, 2, 3, 4, 5, 6];
// const squaredNums = numbers.map(square);

// function square(element){
//     return Math.pow(element, 2);
// }

// console.log(squaredNums);


// practice with function expression method.........
// const numbers = [1, 2, 3, 4, 5, 6];
// const squaredNums = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// console.log(`with expressions: ${squaredNums}`);


// const simpleNum = [2, 3, 4, 5, 6, 7];
// const cubeNums = simpleNum.map(function (element) {
//     return Math.pow(element, 3);
// });

// console.log(cubeNums);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNums = nums.filter(function (element) {
//     return element % 2 === 0;
// });
// const oddNums = nums.filter(function (element) {
//     return element % 2 !== 0;
// });
// const sumOfNums = nums.reduce(function(accum, element){
//     return accum + element;
// });

// console.log(evenNums);
// console.log(oddNums);
// console.log(sumOfNums);



// Arrow function -----------------------------------------------------------------------------------------------
// a way of writing function expressions -------------------------------
// good for simple functions that you use only once --------------
// (parameter) => some code...


// single line code example..........

// const hello = () => console.log("Hello!");
// hello();

// const hello = (name) => console.log(`Hello ${name}`);
// hello("Umedha");


//multiple line code example...............

// const fullname = (fname, lname) => {
//     console.log(`Hello ${fname}`)
//     console.log(`Your surname is: ${lname}`)
// };

// fullname("Umedha", "Rajaratne");


// setTimeout(() => console.log("Hey!"), 2000); // this is how you can use arrow func on timeouts

// const numbers = [1, 2, 3, 4, 5, 6];

// const squared = numbers.map((element) => {
//     return Math.pow(element, 2)
// }); // return will only be needed if there are multiple lines, otherwise you can write in single line

// const squared = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const even = numbers.filter((element) => element % 2 === 0);
// const odd = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accum, element) => accum + element);

// console.log(squared);
// console.log(cubes);
// console.log(even);
// console.log(odd);
// console.log(total);



// object -----------------------------------------------------------------------------------------------
// a collection of properties ----------------------------------------------------------------------
// object = {key: value} -----------------------------------------------------------------
// objects can have methods too (dedicated functions/expressions)...

// const person1 = {
//     firstName: "Umedha",
//     lastName: "Rajaratne",
//     age: 22,
//     isEmployeed: false,
//     sayHello: function () { console.log("Helloww ----------") },
// }

// const person2 = {
//     firstName: "Nishmi",
//     lastName: "Dharmathilake",
//     age: 22,
//     isEmployeed: false,
//     sayHello: () => console.log("Hey there ---------"),
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployeed);

// person1.sayHello();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployeed);

// person2.sayHello();



// this -----------------------------------------------------------------------------------------------
// reference to the object where the mentioned key is used ------------------------------
// its like calling person.name but inside the object, we use this.name ----------
// ** arrow functions are not working while using (this.) ----------------
// also we can use this. on multiple objects...

// const person1 = {
//     fname: "Umedha",
//     lname: "Rajaratne",
//     sayHello: function(){console.log(`Hello, ${this.fname}`)},
//     saySurname: function(){console.log(`Your surname is: ${this.lname}`)},
// }

// const person2 = {
//     fname: "Nishmi",
//     lname: "Dharmathilake",
//     sayHello: function(){console.log(`Hello, ${this.fname}`)},
//     saySurname: function(){console.log(`Your surname is: ${this.lname}`)},
// }

// person1.sayHello();
// person1.saySurname();

// person2.sayHello();
// person2.saySurname();



// constructor -----------------------------------------------------------------------------------------------
// a special method for defining objects ---------------------------------------
// this makes an object reuseable...

// function Car(make, model, year, color) {
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You are driving: ${model}`)}
// }

// const car1 = new Car("Jeep","Renegade","2020","white");
// const car2 = new Car("Ford","Mustang","2021","brown");
// const car3 = new Car("Pagani","huayra","2022","red");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car3.drive();



// class -----------------------------------------------------------------------------------------------
// an ES6 feature that provides a more structured and clear way to work with objects --------------

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProducts(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}LKR`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 2000); // adding data to the object...
// const product2 = new Product("Trouser", 5500);

// product1.displayProducts(); // executing the displayproducts function...
// const total = product1.calculateTotal(salesTax); // getting the return value of calculatetotal func...
// console.log(`Total with Tax: ${total.toFixed(2)}`);

// product2.displayProducts();



// Static -----------------------------------------------------------------------------------------------
// a keyword that defines properties or methods that belong to a class itself rather than the object created from that class
// class owns anything static, not the objects ---------------------------------------------------
// statics are owned by the class not by the objects, its like a global variable but inside the class...

// class MathUtil {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2;
//     }

//     static getCirc(radius) {
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCirc(10));
// console.log(MathUtil.getArea(10));

// class User {
//     static userCount = 0;

//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount() { // static method...
//         console.log(`There are ${User.userCount} users online`);
//     }

//     sayHello() { // normal method (not static)...
//         console.log(`My username is: ${this.username}`);
//     }
// }

// const user1 = new User("Umedha");
// const user2 = new User("Nishmi");

// // console.log(user1.username);
// // console.log(user2.username);
// // console.log(User.userCount);

// user1.sayHello();
// user2.sayHello();
// User.getUserCount();



// inheritance -----------------------------------------------------------------------------------------------
// allows a new class to inherit properties and methods from an existing class (Parent -> Child) ----
// helps with code reusability -------------------------------------------------------------------
// with this child classes will get the properties from their parent classes ------------------
// its like giving a copy for each child where they can edit property values without -----
// the original values of the parent wont change...

// class Animal {
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal {
//     name = "rabbit";
//     hop() {
//         console.log(`This ${this.name} can hop`);
//     }
// }

// class Fish extends Animal {
//     name = "fish";
// }

// class Dog extends Animal {
//     name = "dog";
// }

// const animal1 = new Rabbit();
// const animal2 = new Fish();
// const animal3 = new Dog();

// animal3.alive = false; // keep in mind that alive property is a property of the parent class...

// console.log(`The ${animal1.name} is alive: ${animal1.alive}`);
// console.log(animal2.alive);
// console.log(animal3.alive);

// animal1.eat();
// animal1.sleep();

// animal1.hop();
// animal2.hop(); // animal 2 (fish) dont have the hop method as its a method of rabbit...



// super -----------------------------------------------------------------------------------------------
// this keyword is used to call functions on the parent or superclass within a subclass --------------
// Its often used in the context of classes (inheritance) --------------------------------
// this can be used to access propertties and methods of the parent class...

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed) {
//         console.log(`The ${this.name} moves at a speed of ${speed}kmh`);
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     hop() {
//         console.log(`The ${this.name} can hop`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim() {
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly() {
//         super.move(this.flySpeed);
//     }
// }

// const rabbit1 = new Rabbit("bunny", 20, 30);
// const fish1 = new Fish("dory", 23, 50);
// const hawk1 = new Hawk("woody", 26, 70);

// console.log(rabbit1.name);
// console.log(rabbit1.age);
// console.log(rabbit1.runSpeed);

// rabbit1.hop(); // executing hop method which calls the (move) super method...
// fish1.swim(); // executing swim method which calls the (move) super method...
// hawk1.fly(); // executing fly method which calls the (move) super method...



// getter -----------------------------------------------------------------------------------------------------
// a method we can use to return property data which will be uneditable -----------------------
// mostly returns the private property value (not the original prop value) ---------------------
// automatically invokes when the original property is accessed...

// setter -----------------------------------------------------------------------------------------------------
// this allows you to validate values before assigning them to the property directly -------------
// mostly assings the received values to a private propety (e.g. _name) ----------------------
// automatically invokes when user tries to assign values to the original property...


// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error("Width must be a positive number");
//         }
//     }
//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         } else {
//             console.error("Width must be a positive number");
//         }
//     }

//     get width() {
//         return this._width;
//     }
//     get height() {
//         return this._height;
//     }

//     get area() { // this is not a property of the constructor but getters can reperesent as a prop...
//         return this._height * this._width;
//     }

// }

// const rect1 = new Rectangle(2, 4); // the object...

// rect1.width = 10; //updating initial values using the setter...
// rect1.height = 15;

// console.log(rect1.width);
// console.log(rect1.height);
// console.log(rect1.area); // displaying the getter just as a property of the rectangle constructor...



// class Person {
//     constructor(fname, lname, age) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }

//     set fname(newFname) {
//         if (typeof newFname === "string" && newFname.length > 0) {
//             this._fname = newFname;
//         } else {
//             console.error("First name should be a String value");
//         }
//     }

//     set lname(newLname) {
//         if (typeof newLname === "string" && newLname.length > 0) {
//             this._lname = newLname;
//         } else {
//             console.error("Last name should be a String value");
//         }
//     }

//     set age(newAge) {
//         if (typeof newAge === "number" && newAge > 0) {
//             this._age = newAge;
//         } else {
//             console.error("Age should be a Number");
//         }
//     }

//     get fname() {
//         return this._fname;
//     }

//     get lname() {
//         return this._lname;
//     }

//     get age() {
//         return this._age;
//     }

//     //we can also create getters to return data as they are a property of the class
//     get fullName() { // keep in ind that this is not a function...
//         return this._fname + " " + this.lname;
//     }
// }

// const person1 = new Person("Umedha", "Rajaratne", 22);

// console.log(person1.fname);
// console.log(person1.lname);
// console.log(person1.age);
// console.log(`Your fullname is: ${person1.fullName}`);



// destructuring -----------------------------------------------------------------------------------------------------
// extract values from arrays and objects, then assign them to variables ------------------------------
// [] = to perform array destruction -------------------------------------------------------
// {} = to perform object destruction ------------------------------------------

// ------------- EX 1 -----------------------
// swapping the values of two variables

// let a = 5;
// let b = 10;

// [a, b] = [b, a]; //destructre...

// console.log(a);
// console.log(b);


// ------------- EX 2 -----------------------
// swapping 2 elements of an array

// const colors = ["red", "yellow", "blue", "orange", "pink"];

// console.log(colors);

// [colors[0], colors[4]] = [colors[4], colors[0]]; //destructure...

// console.log(colors);



// ------------- EX 3 -----------------------
// assigning array elements to variables

// const colors = ["red", "yellow", "blue", "orange", "pink"];

// const [firstColor, secondColor, thirdColor, ...otherColors] = colors; //destructure...

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(otherColors);


// ------------- EX 4 -----------------------
// extracting values from objects

// const person1 = {
//     fname: "Umedha",
//     lname: "Rajratne",
//     age: 22,
//     job: "Dev",
// }

// const person2 = {
//     fname: "Nishmi",
//     lname: "Dharmathilake",
//     age: 22,
// }

// const { fname, lname, age, job = "Unemp" } = person1; //destructure, can assign default values for empty

// console.log(fname);
// console.log(lname);
// console.log(age);
// console.log(job);


// ------------- EX 5 -----------------------
// destructuring in function parameters

// function displayPerson({ fname, lname, age, job = "unemployed" }) {
//     console.log(`full name: ${fname} ${lname}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// const person1 = {
//     fname: "Umedha",
//     lname: "Rajratne",
//     age: 22,
//     job: "Dev",
// }

// const person2 = {
//     fname: "Nishmi",
//     lname: "Dharmathilake",
//     age: 22,
// }

// displayPerson(person2);



// nested objects -----------------------------------------------------------------------------------------------------
// objects inside objects, allows to represent more complex data structures -----------------------------
// child object is enclosed by a parent object --------------------------------------------------------

// const person = {
//     fname: "Umedha",
//     lname: "Rajratne",
//     age: 22,
//     isStudent: true,
//     hobbies: ["coding", "editing", "gaming"],
//     address: {
//         street: "172c tivert",
//         city: "kandy",
//         country: "srilanka"
//     }
// }

// // console.log(person.fname);
// // console.log(person.lname);
// // console.log(person.age);
// // console.log(person.isStudent);

// // console.log(person.hobbies);
// // console.log(person.hobbies[1]);

// // console.log(person.address);
// // console.log(person.address.street);

// for (const property in person.address){
//     console.log(person.address[property]);
// }


//example with classes ----------------------------------------------------------

// class Person { // this is the parent object
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address { // this is the child object
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Umedha", 22, "tivert", "kandy", "srilanka");

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address.street);



//array of objects ----------------------------------------------------------

// const fruits = [
//     { name: "apple", color: "red", calories: 95 }, //indx-0
//     { name: "orange", color: "orange", calories: 45 }, //indx-1
//     { name: "banana", color: "yellow", calories: 35 }, //indx-2
//     { name: "pineapple", color: "yellow", calories: 65 }, //indx-3
// ] // each element has an object...

// // accessing the objects property of the fruits array...
// console.log(fruits[2].name);
// console.log(fruits[2].color);
// // array[index].property-name

// // we can push objects to the array...
// fruits.push({ name: "avacardo", color: "green", calories: 105 });

// console.log(fruits[4]);
// console.log(fruits[4].name);
// console.log(fruits[4].color);
// console.log(fruits.length);

// // can use pop to remove an object
// fruits.pop();
// console.log(fruits.copyWithinlength);

// can use splice to remove multiple elements
// fruits.splice(1,2); // index 1 to 2...
// console.log(fruits);

// accessing object properties using for loops
// fruits.forEach(fruit => console.log(fruit.name));
// fruits.forEach(fruit => console.log(fruit.color));

// // printing objects as arrays using map()
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);

// console.log(fruitNames);
// console.log(fruitColors);

// using filter() with objects
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCallorie = fruits.filter(fruit => fruit.calories < 55);

// console.log(yellowFruits);
// console.log(lowCallorie);

// using reduce() with the objects
// const maxFruit = fruits.reduce((max, fruit) =>
//                                 fruit.calories > max.calories ?
//                                 fruit : max);

// console.log(maxFruit);
// console.log(maxFruit.calories);



// sort() -------------------------------------------------------------------------------------------------
// method used to sort elements of an array, sorrts elements as strings in lexicographic order in alphabetically
// lexicographic = {alphabet + numbers + symbols} as string...

// let letters = ["q", "c", "v", "d", "b", "r", "h", "a"];
// let numbers = [1, 7, 2, 9, 3, 5, 10, 3, 0];

// console.log(letters);
// console.log(letters.sort());

// console.log(numbers);
// console.log(numbers.sort()); // output: [0, 1, 10, 2, 3, 3, 5, 7, 9]
// numbers.sort((a, b) => a - b); // sorting numbers in accending order...
// console.log(numbers);
// numbers.sort((a, b) => b - a); // sorting numbers in deccending order...
// console.log(numbers);

// const people = [
//     { name: "umedha", age: 22, gpa: 3.5 },
//     { name: "nishmi", age: 22, gpa: 3.0 },
//     { name: "chethiya", age: 21, gpa: 3.3 },
//     { name: "machan", age: 20, gpa: 2.9 },
// ]

// // people.sort((a, b) => a.age - b.age); // sorting with numbers within an object
// // console.log(people);

// people.sort((a, b) => a.name.localeCompare(b.name)); // sorting with strings wihtin an object (accending)
// console.log(people);

// people.sort((a, b) => b.name.localeCompare(a.name)); // sorting with strings wihtin an object (decending)
// console.log(people);



// shuffling elements of an array -------------------------------------------------------------------------------------------------
// fisher yates algorithm...

// const cards = ['A', 'K', 'Q', 'J', 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // making a shuffling function...
// function shuffle(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         const random = Math.floor(Math.random() * i);

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// shuffle(cards);
// console.log(cards);



// date objects -------------------------------------------------------------------------------------------------
// objects that contain values that represent date and times, can also be formatted and changed ---------

// // Date(year, month, day, hour, minute, second, ms)
// const currentDate = new Date(); // assigning the current date to a variable...
// const newDate = new Date(2024, 0, 20, 4, 45, 50); // creating a new date object manually...

// console.log(currentDate);
// // console.log(newDate);

// const year = currentDate.getFullYear(); // getting year property of the default object...
// const month = currentDate.getMonth();
// const date = currentDate.getDate();

// console.log(`year is: ${year}`);
// console.log(`month is: ${month}`);
// console.log(`date is: ${date}`);

// currentDate.setFullYear(2025); // updating the default object values...
// currentDate.setDate(20);
// currentDate.setMonth(0);
// console.log(currentDate);

// // comparing dates...
// const date1 = new Date("2023-01-20"); // creating an object using string representation...
// const date2 = new Date("2024-01-01");

// if (date2 > date1) {
//     console.log("Happy new year");
// }



// closure ----------------------------------------------------------------------------------------------------
// a function defined inside of another function, inner function has access to variables of outer func ------
// can encapsulate and make variables private but still be accessible to inner functions --------------
// allows for state maintenance ------------------------------------------------------------------
// used frequently in REACT...

// function outer() {

//     let message = "Hello from inner func";

//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// outer();


// function myCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         // console.log(`Counter is: ${count}`);
//     }

//     function getCounter() {
//         return count;
//     }

//     return { increment, getCounter };
// }

// const counter = myCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`Current counter is: ${counter.getCounter()}`);


// function createGame() {

//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function dereaseScore(points) {
//         score -= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore() {
//         return score;
//     }

//     return { increaseScore, dereaseScore, getScore };
// }

// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(6);
// game.dereaseScore(3);

// console.log(`Final score is:${game.getScore()}pts`);



// setTimeout() ----------------------------------------------------------------------------------------------------
// this is a function used to keep a delay upon execusion with entered amount of milliseconds ------------------
//  setTimeout(callback, delay);

// function sayHello() {
//     console.log("Hey there!");
// }

// sayHello(); // instant exec...
// setTimeout(sayHello, 5000); // exec with 5sec delay...

// // anonymous and arrow functions can alsp be called with timeouts...

// setTimeout(function () { console.log("hey its anon func") }, 3000);
// setTimeout(() => console.log("hey this is arrow"), 3500);

// // clearTimeout() -------------------------------------------------------------------------------------
// // can be used to stop triggering delayed execusions using specific ID --------------

// const timeout1 = setTimeout(() => console.log("this wont be triggered"), 2000);
// clearTimeout(timeout1); // using this timeout1 will be stopped executing...

// let timeout2;

// function startTimer() {
//     timeout2 = setTimeout(() => console.log("hey clicked"), 2000);
// }

// function stopTimer() {
//     clearTimeout(timeout2);
//     console.log("cleared triger");
// }



// live time setup ---------------------------------------------------------------------------------

// function livetime() {
//     const currentTime = new Date();

//     let hours = currentTime.getHours();
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);
//     const minutes = currentTime.getMinutes().toString().padStart(2, 0);
//     const seconds = currentTime.getSeconds().toString().padStart(2, 0);

//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

//     document.getElementById("time").textContent = timeString;
// }

// livetime();
// setInterval(livetime, 1000);



// stop watch ---------------------------------------------------------------------------------

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;


// function start() {
//     if (!isRunning) {
//         console.log(startTime);
//         startTime = Date.now() - elapsedTime;
//         console.log(startTime);
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop() {
//     if (isRunning) {
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }
// }

// function reset() {
//     clearInterval(timer);
//     startTime = 0;
//     elapsedTime = 0;
//     display.textContent = "00:00:00:00";
//     isRunning = false;
// }

// function update() {
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10);

//     hours = hours.toString().padStart(2, "0");
//     minutes = minutes.toString().padStart(2, "0");
//     seconds = seconds.toString().padStart(2, "0");
//     milliseconds = milliseconds.toString().padStart(2, "0");

//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
// }



// ES6 -------------------------------------------------------------------------------------------------------
// an external file that contains reusable codes that can be imported into other js files ---------

// import { PI, getCircumf, getArea } from './mathUtil.js';

// console.log(PI);
// const radius = 10;

// console.log(`circumf is: ${getCircumf(radius).toFixed(2)}cm`);
// console.log(`area is: ${getArea(radius).toFixed(2)}cm^2`);



// Error -------------------------------------------------------------------------------------------------------
// an objectthat is created to represent a problem that occur during executing/input --------
// try {} = encloses codes that might cuase an error --------------------------------
// catch {} = catch and handle any thrown errors from try {} --------------------------
// finally {} = (optional) always executes, used mostly to cleanup --------------------

// try {
//     console.log(x);
// }

// catch (error) {
//     console.error(error);
// }

// console.log("reached the end");


// try {
//     const dividend = Number(window.prompt("enter dividend"));
//     const divisor = Number(window.prompt("enter divisor"));

//     if (divisor == 0) {
//         throw new Error("You cannot use 0 as divisor");
//     }

//     if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("dividend or divisor should be a number");
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }

// catch (error) {
//     console.error(error);
// }

// console.log("reached the end");