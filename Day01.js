//1. Write a code to find area of rectangle
// INPUT : length, width
var length = 10;
var width = 5;

// PROCESS
const luasPersegi = length * width;

// OUTPUT
console.log(luasPersegi);

//2. Write a code to find perimeter of rectangle
// INPUT : length, width
var length = 10;
var width = 5;

// PROCESS
const kelilingPersegi = (2*length) + (2*width);

// OUTPUT
console.log(kelilingPersegi);

//3.  Write a code to find diameter, circumference and area of a circle.
// INPUT
const PI = 3.14;
let jariJari = 15;

// PROCESS
const luasLingkaran = PI * jariJari * jariJari;
const kelilingLingkaran = 2 * PI * jariJari;
const diameterLingkaran = 2 * jariJari;

// OUTPUT
console.log("Luas lingkaran >>", luasLingkaran);
console.log("Keliling lingkaran >>", kelilingLingkaran);
console.log("Diameter lingkaran >>", diameterLingkaran);

console.log(`Jari - jari = ${jariJari}, Diameter = ${diameterLingkaran}, Luas = ${luasLingkaran}, Keliling = ${kelilingLingkaran}`);

// 4. Write a code to find angles of triangle if two angles are given
// INPUT
let angleA = 60;
let angleB = 70;

// PROCESS
let angleC = 180 - (angleA + angleB);

// OUTPUT
console.log(`${angleC} derajat`);

// 5.
// INPUT
const firstDate = new Date("2023-08-26");
const secondDate = new Date("2023-08-29");

// PROCESS
const miliSecond = secondDate - firstDate;
const resultDay = Math.abs(Math.floor(miliSecond / 86400000));

// OUTPUT
console.log(resultDay);

// 6. 
// INPUT
let numberOfDays = 400;

// PROCESS
let year = Math.floor(numberOfDays / 365);
let dayLeft = numberOfDays - (year*365);
let month = Math.floor(dayLeft / 30);
let day = dayLeft - (month * 30);

// OUTPUT
console.log(year);
console.log(month);
console.log(day);

console.log(`${year} tahun, ${month} bulan, ${day} hari.`);