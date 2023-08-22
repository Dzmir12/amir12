// tamrin1

// let userInput;
// let number;

// do {
//     userInput = prompt('Please enter a number'); // Prompt the user for input

//     
//     number = parseInt(userInput);
// } while (isNaN(number) || userInput.trim() === '');

// let isPrime = true;

// if (number <= 1) {
//     isPrime = false; 
// } else {
//     let i = 2;
//     while (i < number) {
//         if (number % i === 0) {
//             isPrime = false;
//             break; 
//         }
//         i++;
//     }
// }

// if (isPrime) {
//     console.log(`${number} is a prime number.`);
// } else {
//     console.log(`${number} is not a prime number.`); }


// tamrin2

// let userName;

// do {
//     userName = prompt('Please enter your name'); 
// } while (!/^[a-zA-Z]+$/.test(userName) || userName.trim() === '');

// let reversedName = '';

// for (let i = userName.length - 1; i >= 0; i--) {
//     reversedName += userName[i];
// }

// console.log(`Your name reversed: ${reversedName}`);


// tamrin3

// function isPythagoreanTriple(a, b, c) {
//     return a * a + b * b === c * c;
// }

// let maxNumber;

// do {
//     const userInput = prompt('Please enter a number'); // Prompt the user for input
//     if (!userInput) {
//         alert('Please enter a valid number.'); // Show an alert for empty input
//         continue;
//     }
//     maxNumber = parseInt(userInput);
// } while (isNaN(maxNumber) );

// console.log(`Pythagorean triples up to ${maxNumber}:`);

// for (let a = 1; a <= maxNumber; a++) {
//     for (let b = a; b <= maxNumber; b++) {
//         for (let c = b; c <= maxNumber; c++) {
//             if (isPythagoreanTriple(a, b, c)) {
//                 console.log(`${a}, ${b}, ${c}`);
//             }
//         }
//     }
// }



// tamrin 4

// const userInput = prompt("Enter a string without spaces:");
// const inputWithoutSpaces = userInput.replace(/\s+/g, '');
// let repeatedString = "";

// for (let i = 0; i < inputWithoutSpaces.length; i++) {
//   repeatedString += inputWithoutSpaces[i] + inputWithoutSpaces[i];
// }
// console.log("Repeated string:", repeatedString);



// tamrin 5

// function manipulateString(inputString, sequences) {
//     // Convert the sequences to an array
//     const sequenceArray = sequences.split(',');
  
//     // Remove the first and last elements
//     sequenceArray.shift();
//     sequenceArray.pop();
  
//     // Check if the resulting array is empty
//     if (sequenceArray.length === 0 || inputString === '') {
//       return null;
//     }
  
//     // Join the remaining sequences with spaces
//     const result = sequenceArray.join(' ');
  
//     return result;
//   }
  
//   // Prompt user for input
//   const inputString = prompt("Enter a string:");
//   const sequences = prompt("Enter character sequences separated by commas:");
  
//   // Call the function and display the result
//   const manipulatedString = manipulateString(inputString, sequences);
//   console.log("Manipulated string:", manipulatedString);
  
