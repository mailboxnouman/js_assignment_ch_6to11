// [01]
var cityName = prompt("Enter a city name")
var data = "karachi"

if (cityName === data) {
    alert("Welcome to city of lights")
} else {
    alert("City not in the list")
}

// [02]
var gender = prompt("Enter your gender")

if (gender === "male") {
    alert("Welcome Sir")
} if (gender === "female") {
    alert("Welcome Maam")
}

// [03]
var color = prompt("Enter traffic signal color")

if (color === "red") {
    alert("Must Stop")
} else if (color === "yellow") {
    alert("Ready to move")
} else if (color === "green") {
    alert("Move now")
} else {
    alert("Enter proper color for traffic signal")
}

// [04]
var fuel = Number(prompt("Write remaining fuel in liter"))
if (fuel < 0.25){
    alert("Please refill the fuel in your car")
}else{
    alert("You have enough fuel in your car")
}


// [05] Alert will display or not?
// a.

var a = 4;
if (a++ === 5) {
    alert("given condition is not true so alert won't display")
}


// b.
var b = 82;
if (b++ === 83) {
    alert("given condition is not true so alert won't display")
}

// c.
var c = 12;

if (c++ === 13) {
    alert("condition 1 is not true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (c++ < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals, Alert will display");
}

// e. 
if (true) {
    alert("This alert will display");
}
if (false) {
    alert("This alert will not display because condition is false");
}

// f. 
if ("car" < "cat") {
    alert("car is smaller than cat, This alert will show because in dictionary order of word car come before cat");
}


// [06]

var eng = Number(prompt("Enter English marks"))
var urd = Number(prompt("Enter Urdu marks"))
var mth = Number(prompt("Enter Math marks"))

var totalMarks = 300;
var obtMarks = eng + urd + mth;
var percent = (obtMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet </h1> <br><br><br>")
document.write("Total Marks: " + "<b>" + totalMarks + "</b><br>")
document.write("Marks Obtained: " + obtMarks + "<br>")
document.write("Percentage: " + percent + "%" + "<br>")

if (percent >= 80) {
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
}


else if (percent <= 79 && percent >= 70) {
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good" + "<br>")
}


else if (percent <= 69 && percent >= 60) {
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")
}


else if (percent <= 60) {
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry.. Work Hard" + "<br>")
}


var user = Number(prompt("Is 2 + 2 = ?"))
a = 4

if (user === a) {
    alert("True");
}
if (user != a) {
    alert("False");
}

// [07]
var guessNum = Number(prompt("Guess any Number between 1 to 10"))
var secNum = 3

if (secNum === guessNum) {
    alert("Bingo! Correct answer")
} else if (secNum === guessNum + 1 || secNum === guessNum - 1) {
    alert("Close enough to the correct answer")
} else {
    alert("This is not correct number, secret number is between 1 to 10")
}

// [08]
var userInput = Number(prompt("Enter any Number"))

if (userInput % 3 === 0) {
    alert(`The Number ${userInput} can be completely devide by 3`)
} else {
    alert(`The Number ${userInput} can not be devide by 3`)
}


// [09]
var userInput = Number(prompt("Enter any Number to check Even or odd"))

if (userInput % 2 === 0) {
    alert(`The Number ${userInput} is Even Number`)
} else {
    alert(`The Number ${userInput} is Odd Number`)
}

// [10]
var temperature = Number(prompt("Enter the temperature in Celsius"))

if (temperature >= 40) {
    document.write("It is too hot outside")
}


else if (temperature <= 39 && temperature >= 30) {
    document.write("The Weather today is Normal")
}


else if (temperature <= 29 && temperature >= 20) {
    document.write("Today’s Weather is cool")
}


else if (temperature >= 0 && temperature <= 19) {
    document.write("OMG! Today’s weather is so Cool")
}

// [11]
var first = Number(prompt("Enter First Number"))
var second = Number(prompt("Enter Second Number"))
var operator = prompt("Enter Operator")
var percentSum = (first / second) * 100;


if (operator == "+") {
    document.write(first + second)
} else if (operator == "-") {
    document.write(first - second)
} else if (operator == "*") {
    document.write(first * second)
} else if (operator == "/") {
    document.write(first / second)
} else if (operator == "%") {
    document.write(percentSum + "%")
} else {
    alert("Enter correct operator")
}