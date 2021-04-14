//!1. Find the missing number in a given integer array of 1 to n
/*
const array = [1, 2, 3, 4, 6, 7, 8, 9, 10]
const getDropNumber = arr => {
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (i !== arr[i - 1]) return i
    if (i === arr[arr.length - 1]) return 'There are every number in array'
  }
}
console.log(getDropNumber(array))
*/

//!2. Find a duplicate number in an array of integers
/*
const array = [1, 2, 3, 2, 4, 6, 4, 5, 6, 8, 9, 10]
const findDuplicateNumber = arr => {
  let dupNumbers = arr.filter((el, index, self) =>
    self.slice(index + 1).find(el2 => el2 === el)
  )
  return dupNumbers
}
console.log(findDuplicateNumber(array))
*/

//!3. Find the largest and smallest number in an unsorted array of integers
/*
const array = [1, 7, 3, 9, -10, 28, 24, -39, 15]

const getNumbers = arr => {
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }

  return [min, max];
}
console.log(getNumbers(array))
*/

//!4. Return an array showing the cumulative sum at each index of an array of integers
/*
const array = [1, 3, 4, 6, 8, 4, 9, 2]
const getNumbers = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++)
  newArr.push(arr[i] + arr.slice(0, i).reduce((acc, el) => acc + el, 0))
  return newArr;
}

console.log(getNumbers(array));
*/

//! 5. Find all duplicate numbers in an array with multiple duplicates
/*
const array = [1, 3, 5, 3, 6, 7, 9, 6, 6, 6, 7, 7, 9, 5, 3, 9]

const getDuplicates = arr => {
  const duplicates = [];
  arr.forEach((el, index, self) => {
    if (!duplicates.find(el2 => el2 === el) && self.slice(index + 1).find(el2 => el2 === el)) {
      duplicates.push(el);
    }
  });
  return duplicates;
}

console.log(getDuplicates(array));
*/

//! 6.  Remove all duplicates from an array of integers
/*
const array = [1, 3, 4, 5, 4, 2, 3, 7, 8, 5, 2, 3, 3, 3, 3, 3, 3];

const removeDuplicates = arr =>
  arr.sort().filter(
    (el, index, self) => el !== self.slice(index + 1).find(el2 => el2 === el)
  );
  console.log(removeDuplicates(array));
*/

//! 7. Find all pairs in an array of integers whose sum is equal to a given number
/*
const array = [1, 2, 3, 4, 5, 6, 0, 7]
const getNumbers = (arr, givenNumber) => {
  const pairs = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === givenNumber) pairs.push([arr[i], arr[j]])
    }
  }

  return pairs
}

console.log(getNumbers(array, 7))
*/

//! 8. check Prime
/*
const checkPrime = number => {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(checkPrime(127))
*/


