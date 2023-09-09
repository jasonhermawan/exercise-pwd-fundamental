// 1.
let triangleResult = "";
let count = 1;

function triangle(height){
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
        if (count < 10) {
          triangleResult += "0" + count + " ";
        } else if (count >= 10) {
          triangleResult += count + " "
        }
        count++;
    }
    triangleResult +=`\n`
  }
  return triangleResult;
}

console.log(triangle(5));

// 2.
let result = [];

function fizzBuzz (n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzz(30));


// 3.
function calculateBMI (weight, height) {
  let formulaBMI = weight / Math.pow(height, 2);
  console.log(formulaBMI);
  if (formulaBMI < 18.5) {
    return "Less Weight";
  } else if (formulaBMI >= 18.5 && formulaBMI <= 24.99) {
    return "Ideal";
  } else if (formulaBMI >= 25 && formulaBMI <= 29.99) {
    return "Overweight";
  } else if (formulaBMI >= 30 && formulaBMI <= 39.99) {
    return "Very Overweight";
  } else {
    return "Obesity"
  }
}

console.log(calculateBMI(72, 1.7))

// 4. 
result = [];

function evenOnly (n) {
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result.push(i)
    }
  }
  return result;
}

console.log(evenOnly(20));


// 5.
result = [];

function splitText (text) {
  result = text.split(" ")
  return result;
}

console.log(splitText("Hello World Test"));