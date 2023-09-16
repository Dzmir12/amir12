// practice-1

// function findNumber(word) {
//   let num = "";
//   for (let i = 0; i < word.length; i++) {
//     if (!isNaN(word[i])) {
//       num += word[i];
//     }
//   }
//   return parseInt(num);
// }

// function sortString(input) {
//   if (!input) return "";
//   splitedString = input.split(" ");
//   sortedStr = splitedString.sort((a, b) => {
//     const numA = findNumber(a);
//     const numB = findNumber(b);
//     return numA - numB;
//   });
//   return sortedStr.join(" ");
// }

// const stringList = prompt("enter your words (contain a number 1-9): ");
// const result = sortString(stringList);
// console.log(result);

// ------------------------------------------------------------------------------------------
// practice-2

// function formatTime(seconds) {
//   if (seconds < 0 || seconds > 359999) {
//     return "Invalid input";
//   }

//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   const formattedHours = String(hours).padStart(2, "0");
//   const formattedMinutes = String(minutes).padStart(2, "0");
//   const formattedSeconds = String(remainingSeconds).padStart(2, "0");

//   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }

// const time = prompt("enter your time in second: ");
// console.log(formatTime(time));

// ------------------------------------------------------------------------------------------
// practice-3

// function rgb(r, g, b) {
//   r = Math.min(255, Math.max(0, r));
//   g = Math.min(255, Math.max(0, g));
//   b = Math.min(255, Math.max(0, b));

//   let hexR = r.toString(16).padStart(2, "0");
//   let hexG = g.toString(16).padStart(2, "0");
//   let hexB = b.toString(16).padStart(2, "0");

//   let result = hexR + hexG + hexB;

//   return result.toUpperCase();
// }

// let R = prompt("enter the red amount:");
// let B = prompt("enter the blue amount:");
// let G = prompt("enter the green amount:");

// console.log(rgb(R, B, G));

// ------------------------------------------------------------------------------------------
// practice-4

// function newString(input) {
//   inputArray = input.split("");
//   const inputWords = inputArray.filter((value) => isNaN(value));
//   const inputNumbers = inputArray.filter((value) => !isNaN(value));
//   const numericPart = inputNumbers.join("");
//   const incrementedNumber = (parseInt(numericPart, 10) + 1).toString();
//   const numZeros = numericPart.length - incrementedNumber.length;
//   const result = inputWords.join("") + "0".repeat(numZeros) + incrementedNumber;
//   return result;
// }

// const sentence = prompt("enter your string: ");
// console.log(newString(sentence));
