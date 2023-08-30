// tamrin aval
// const userInput = prompt("please enter a phrase");

// function counter(str) {
//     let counter1 = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "u" || str[i] === "i" || str[i] === "o") {
//             counter1++;
//         }
//     }
//     return counter1;
// }

// console.log(counter(userInput));


// tamrin dovom
// const userInput = prompt("please enter a combination of numbers");

// function power(num) {
//     let arr = [];
//     for (let i = 0; i < num.length; i++) {
//         let squared = Math.pow(parseInt(num[i]), 2);
//         arr.push(squared);
//     }
//     return arr;
// }

// let resultArray = power(userInput);
// console.log(resultArray);
// let result = resultArray.join("");
// console.log(result);




// var giveup = true; 
// let arr=[];
// while (giveup) {
//  let  userInput= prompt("please enter a phrase");
//     giveup = confirm('are you sure you want to continue?');
//     if(userInput>=0){
//           arr.push(userInput);
//     }

//     if (!giveup) {
//         break;
//     }
   
// }

// function sum(arr) {
//      const num=Number(arr) ;
//      const sum=0;
//      for (let i=0;i<num.lenght;i++) {
//         if (num) {
//           let sumAll= sum+=num;
//           return sumAll;
//         }
        
//      }
       
// }


// console.log( sum(arr));



// tamrin 3

// var giveup = true; 
// let arr = [];

// while (giveup) {
//     let userInput = prompt("please enter a number");
//     giveup = confirm('Are you sure you want to continue?');
    
//     if (!isNaN(userInput) && userInput>=0) {
//         arr.push(parseFloat(userInput));
//     }

//     if (!giveup) {
//         break;
//     }
// }

// function sum(arr) {
//     let sumAll = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         sumAll += arr[i];
//     }
    
//     return sumAll;
// }

// console.log(sum(arr));


// tamrin 4

//  function isIsogram(str) {
//     const charSet = new Set();
//     const cleanedStr = str.toLowerCase().replace(/\s+/g, '');

//     for (const char of cleanedStr) {
//         if (charSet.has(char)) {
//             return false;
//         }
//         charSet.add(char);
//     }

//     return true; 
// }

// const userInput = prompt("Please enter a phrase:");
// const result = isIsogram(userInput);

// if (result) {
//     console.log("The phrase is an isogram.");
// } else {
//     console.log("The phrase is not an isogram.");
// }


// tamrin 5
// function repeatText(text, repeat) {
//     let result = "";
    
//     for (let i = 0; i < repeat; i++) {
//         result += text;
//     }
    
//     return result;
// }

// const inputText = prompt("Enter the text to repeat:");
// const inputRepeat = parseInt(prompt("Enter the number of times to repeat:"));

// if (!isNaN(inputRepeat)) {
//     const repeatedText = repeatText(inputText, inputRepeat);
//     console.log( repeatedText);
// } else {
//     console.log("Invalid input for repeat count.");
// }


// tamrin 6

// function fibonacciSequence(limit) {
//     if (limit <= 1) {
//         return [];
//     }

//     const sequence = [0, 1];
//     let nextValue = 1;

//     while (nextValue <= limit) {
//         nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//         if (nextValue <= limit) {
//             sequence.push(nextValue);
//         }
//     }

//     return sequence;
// }

// const inputValue = parseInt(prompt("Enter a number to calculate Fibonacci sequence up to:"));

// if (!isNaN(inputValue) && inputValue >= 0) {
//     const fibSequence = fibonacciSequence(inputValue);
//     console.log("Fibonacci Sequence:", fibSequence);
// } else {
//     console.log("Invalid input for Fibonacci calculation.");
// }

