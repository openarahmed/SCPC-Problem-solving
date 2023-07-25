// Task 1 ...............................
function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}
const inputStr = "hello world";
const outputStr = reverseString(inputStr);


// Task 2....................................
function sumOfPositiveNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
      sum += numbersArray[i];
    }
  }
  return sum;
}
const inputArray1 = [2, -5, 10, -3, 7];
const outputSum = sumOfPositiveNumbers(inputArray1);



// Task 3............................................
function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    return null;
  }
  const frequencyCounter = {};
  let maxFrequency = 0;
  let mostFrequentElement = arr[0];

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

    if (frequencyCounter[num] > maxFrequency) {
      maxFrequency = frequencyCounter[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findMostFrequentElement(inputArray);


// Task 5..........................................
function calculator(num1, operator, num2) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return "Error: Cannot divide by zero";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator";
  }
}

const number1 = 5;
const number2 = 3;
const operator = '*';
const result = calculator(number1, operator, number2);


// Task 6.........................................
function generateRandomPassword(length) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }
  return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);


// Task 7.................................................
function romanToInt(romanNumeral) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanValues[currentChar];

    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";



// Task 8...............................................
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "No second smallest element found.";
  }

  return secondSmallest;
}

const numbersArray = [5, 1, 8, 9, 3];
const secondSmallestNumber = findSecondSmallest(numbersArray);

