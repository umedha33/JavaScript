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
