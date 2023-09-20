
// tamrin1
// const userInput = prompt ('write acombination of number');

// function isValidISBN10(isbn) {
    
//     isbn = isbn.replace(/ /g, '').toUpperCase();

//     if (isbn.length !== 10) {
//       return false;
//     }
  
//     let checksum = 0;

//     for (let i = 0; i < 10; i++) {
//       const digit = isbn[i];
//       if (i < 9 && !/[0-9]/.test(digit)) {
//         return false;
//       } else if (i === 9 && !(digit === 'X' || /[0-9]/.test(digit))) {
//         return false;
//       }
  
//       const value = (digit === 'X' ? 10 : parseInt(digit, 10));
//       checksum += value * (i + 1);
//     }
  
//     return checksum % 11 === 0;
//   }
  
// console.log (isValidISBN10(userInput));
  


// tamrin 2

// function stripComments(input, markers) {
//     const lines = input.split('\n');
  
//     for (let i = 0; i < lines.length; i++) {
//       const line = lines[i];
//       for (const marker of markers) {
//         const index = line.indexOf(marker);
//         if (index !== -1) {
//           lines[i] = line.slice(0, index).trim();
//           break;
//         }
//       }
//     }
  
//     const result = lines.join('\n');
//     return result;
//   }
  
//   const input = prompt("Enter a sentence:");
  
//   const markers = ["#", "!"];
  
//   const result = stripComments(input, markers);

//   console.log("Result:\n" + result);
  
  

// tamrin4

const arr1 = [];

while (true) {
  const input = prompt("Enter an integer or 'quit' to exit:");
  
  if (input === "quit") {
    break; // Exit the loop
  } else if (input !== "") {
    arr1.push(Number(input));
  }
}

function maxSequence(arr) {
    if (arr.length === 0) {
      return 0; 
    }
  
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum < 0 ? 0 : maxSum;
  }


  console.log ( maxSequence(arr1))