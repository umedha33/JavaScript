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

const person1 = {
    fname: "Umedha",
    lname: "Rajaratne",
    sayHello: function(){console.log(`Hello, ${this.fname}`)},
    saySurname: function(){console.log(`Your surname is: ${this.lname}`)},
}

const person2 = {
    fname: "Nishmi",
    lname: "Dharmathilake",
    sayHello: function(){console.log(`Hello, ${this.fname}`)},
    saySurname: function(){console.log(`Your surname is: ${this.lname}`)},
}

person1.sayHello();
person1.saySurname();

person2.sayHello();
person2.saySurname();