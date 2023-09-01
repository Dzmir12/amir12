




const userInput = prompt('Please enter a combination of numbers:');
const inputNumber = parseInt(userInput); 

function rearrangeToHighest(num) {
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        return;
    }

    const highestNumber = parseInt(num.toString().split('').sort((a, b) => b - a).join(''));

    return highestNumber;
}

if (!isNaN(inputNumber) && inputNumber >= 0) {
    const highest = rearrangeToHighest(inputNumber);
    console.log("Highest Number:", highest);
} else {
    console.log("Invalid input. Please provide a non-negative integer.");
}



