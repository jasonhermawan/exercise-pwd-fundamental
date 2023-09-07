// 1. Convert Celcius to Farenheit
// INPUT
let celcius = 5;

// PROCESS
let convert = (celcius * (9 / 5)) + 32;

// OUTPUT
console.log(convert);

// 2. Memeriksa angka ganjil / genap
// INPUT
let angka = 7;

// PROCESS OUTPUT : 
if ( angka % 2 === 0) {
  console.log("Angka Genap");
} else {
  console.log("Angka Ganjil");
}

// 3. Write a code to check whether the number is prime number or not
// INPUT
let number = 10;
let tipeAngka;

// PROCESS
for (let f = 2; f < number; f++) {
  let modulus = number % f
  console.log(modulus);
  if (modulus === 0){
    tipeAngka = " Tidak Prima"
    console.log(tipeAngka);
    break;
  } else {
    tipeAngka = " Prima"
    console.log(tipeAngka);
  }
}

// OUTPUT
console.log(`${number} adalah bilangan ${tipeAngka}`);

// 4. Write a code to find sum of number 1 to N
// INPUT
let n = 6;
let sum = 0;

// PROCESS
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

// OUTPUT
console.log(sum);

// 5. Factorial
// INPUT
let numberOfFactorial = 6;
let result = 1;

// PROCESS
for (let a = 1; a <= numberOfFactorial; a++){
  result = result * a;
}

// OUTPUT
console.log(result);

// 6. Fibonacci
// Angka fibonaci: 1,1,2,3,5,8,13,21
// Input
let urutanAngka = 8;
let n0 = 1; // angka pertama
let n1 = 1; // angka kedua
let fn;

// PROCESS
for(a = 3; a <= urutanAngka; a++){
  fn = n0 + n1;
  n0 = n1;
  n1 = fn;
  console.log(fn);
}

// OUTPUT
console.log(fn);