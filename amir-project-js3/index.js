
// tamrin 1

// const userInput = prompt('Please enter a sentence?');

// function removeVowels(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (char !== 'a' && char !== 'e' && char !== 'u' && char !== 'i' && char !== 'o') {
//             result += char;
//         }
//     }
//     return result;
// }

// console.log(removeVowels(userInput));



// tamrin 2

// let userArr=[];
// isgoing=true;
// while (isgoing) {
//  const userInput=prompt('please enter a list of name');
//  if (userInput.trim()!='') {
//     userArr.push(userInput);
//  }
//  if (userInput=='quit') {
//     isgoing=false;
//     userArr.pop('quit');
//     break;
//  }
// }
// console.log(userArr)

// function whoLikeThis(arr) {

//      if (arr=='') {
//         return 'nobody likes this';
//      }else if(arr.length<=1) {
//       return `${arr} likes this`;
//      }else if(arr.length<=2) {
//          const lastchar=arr.pop();
//         return `${arr} and ${lastchar} likes this`;
//        }else{
//         const lastchar=arr.pop();
//         return `${arr} and ${lastchar} likes this`;
//        }
// }

// console.log(whoLikeThis(userArr))


// tamrin 3

// let userArr = [];
// let isGoing = true;

// while (isGoing) {
//   const userInput = prompt('Please enter a number or type "quit" to exit:');

//   if (userInput === 'quit') {
//     isGoing = false;
//   } else {
//     const number = parseFloat(userInput);
    
//     if (!isNaN(number)) {
//       userArr.push(number);
//     } else {
//       alert('Invalid input. Please enter a valid number.');
//     }
//   }
// }

// console.log(userArr);


// let comparisonarr = [];
// let haveDesire= true;

// while (haveDesire) {
//   const userInput = prompt('Please enter a comparison number or type "quit" to exit:');

//   if (userInput === 'quit') {
//     haveDesire = false;
//   } else {
//     const number = parseFloat(userInput);
    
//     if (!isNaN(number)) {
//         comparisonarr.push(number);
//     } else {
//       alert('Invalid input. Please enter a valid number.');
//     }
//   }
// }

// console.log(comparisonarr);


// function findArrayDifference(arr1, arr2) {
//     const uniqueElements = new Set([...arr1, ...arr2]);
//     const difference = [];
//     for (const element of uniqueElements) {
//       if (!arr1.includes(element) || !arr2.includes(element)) {
//         difference.push(element);
//       }
//     }
  
//     return difference;
//   }

// console.log(findArrayDifference(userArr,comparisonarr));



// tamrin 4

// const letter = prompt("enter your letters: ");

// function counter(letterStr) {
//   letterStr = letterStr.toLowerCase();
//   const copiedLetterStr = [...letterStr];
//   const duplicateList = [];
//   for (const word1 of letterStr) {
//     let duplicateCounter = 0;
//     for (const word2 of copiedLetterStr) {
//       if (word1 === word2) {
//         duplicateCounter += 1;
//       }
//     }
//     if (duplicateCounter > 1 && !duplicateList.includes(word1)) {
//       duplicateList.push(word1, duplicateCounter);
//     }
//   }
//   return duplicateList.join('');
// }
// console.log(counter(letter));

