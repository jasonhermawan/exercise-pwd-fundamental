// 1.
// Input
let n = 9;
let result;
let output = "";
// Process
for (let i = 0; i <= 10; i++) {
  result = `${n} x ${i}\n`
  output += result;
}
// Output
console.log(output);

// 2.
// Input
let text = "Malam";
let dataReverse = "";
output = "";
console.log(text.charAt(0));
// Process
for ( let a = text.length - 1; a >= 0; a--) {
  dataReverse += text.charAt(a);
}
console.log(dataReverse);
if (text.toLowerCase === dataReverse.toLowerCase) {
  output = "Palindrome"
} else {
  output = "Not Palindrome"
}
// Output
console.log(output);

// 3. 
// Input
let centiMeter = 10000;
// Process
let convertToKM = centiMeter / 100000;
// Output
console.log(centiMeter + "cm = " + convertToKM + " Km");

// 4.
// Input
let number = 10000;
// Process
let currency = number.toLocaleString("id", {style : "currency", currency : "IDR"});
// Output
console.log(currency);

// 5.
// Input
text = "Hello World"
let searchString = "ell"
let textSplit =""
// Process
textSplit = text.replace(searchString, "");
// Output
console.log(textSplit);

// 6.
// Input
text = "hello world test"
// Process
let firstLetter = text.split(" ");
console.log(firstLetter);
for (i = 0; i < firstLetter.length; i++) {
  firstLetter[i] = firstLetter[i][0].toUpperCase() + firstLetter[i].substr(1);
}
// Output
console.log(firstLetter);

// 7.
// Input
text = "Halo";
let reversedText = "";
// Process
for ( a = text.length; a >= 0; a--) {
  reversedText += text.charAt(a);
}
// Output
console.log(reversedText.toLowerCase());


// 8.
// Input
text = "QuiCK BrOwN FoX"
output = ""
// Process
for ( a = 0; a < text.length; a++) {
  if (text.charAt(a).toUpperCase() === text.charAt(a) ) {
    output += text.charAt(a).toLowerCase();
  } else {
    output += text.charAt(a).toUpperCase();
  }
}
// Output
console.log(output);


// 9.
// Input
let numA = 10;
let numB = 12;
output = "";
// Process
if (numA > numB) {
  output = `${numA} is bigger than ${numB}`;
} else if (numA < numB) {
  output = `${numB} is bigger than ${numA}`;
} else {
  output = `${numA} is equal with ${numB}`;
}
// Output
console.log(output);

// 10.
// Input
let firstNumber = 10;
let secondNumber = 7;
let thirdNumber = 13;
output = "";
// Process
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  if (secondNumber > thirdNumber) {
    output = firstNumber + ", " + secondNumber + ", " + thirdNumber;
  } else {
    output = firstNumber + ", " + thirdNumber + ", " + secondNumber;
  }
} else if ( secondNumber > firstNumber && secondNumber > thirdNumber) {
  if (firstNumber > thirdNumber) {
    output = secondNumber + ", " + firstNumber + ", " + thirdNumber;
  } else {
    output = secondNumber + ", " + thirdNumber + ", " + firstNumber;
  }
} else if ( thirdNumber > firstNumber && thirdNumber > secondNumber) {
  if (firstNumber > secondNumber) {
    output = thirdNumber + ", " + firstNumber + ", " + secondNumber;
  } else {
    output = thirdNumber + ", " + secondNumber + ", " + firstNumber;
  }
}
// Output
console.log(output);

// 11.
// Input
let type = "This is a string"
let hasil = "";
// Process
if (typeof type === "string") {
  hasil = "1";
} else if (typeof type === "number") {
  hasil = "2";
} else {
  hasil = "3";
};
// Output
console.log(hasil);

// 12.
// Input
text = "An apple a day keeps the doctor away";
textLower = text.toLowerCase();
// Process
result = textLower.replaceAll("a", "*")
// Output
console.log(result);
