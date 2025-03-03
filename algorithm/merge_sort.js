/* This solution below was gotten from free code camp */
// You may recognize this code at the top by now; it just loads a file
// full of numbers into a list.
const fs = require('fs');

function loadNumbers(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  return data.split('\n').map(Number);
}

const numbers = loadNumbers(process.argv[2]);

// Let's define a recursive merge sort function. As usual, it takes
// the list or sub-list that we want it to sort.
function mergeSort(values) {
  // Our base case is the same as with Quicksort. If the list has zero
  // or one values, there's nothing to sort, so we return it as-is.
  if (values.length <= 1) {
    return values;
  }
  // If we didn't return, it means we're in the recursive case. So
  // first we need to split the list in half. We need to know the
  // index we should split on, so we get the length of the list and
  // divide it by 2. So for example if there are 8 items in the list,
  // we'll want an index of 4. But what if there were an odd number of
  // items in the list, like 7? We can't have an index of 3.5, so
  // we'll need to round down in that case. Since we're working in
  // JavaScript, we can use Math.floor to achieve this.
  const middleIndex = Math.floor(values.length / 2);
  // Now we'll use the slice method to get the left half of the
  // list. We'll pass that list to a recursive call to the mergeSort
  // function.
  const leftValues = mergeSort(values.slice(0, middleIndex));
  // We'll also use slice to get the right half of the list,
  // and pass that to mergeSort as well.
  const rightValues = mergeSort(values.slice(middleIndex));
  // Now we need to merge the two halves together, and sort them as we
  // do it. We'll create a list to hold the sorted values.
  const sortedValues = [];
  // Now we get to the complicated part - merging the two halves
  // together and sorting them as we do it. We'll be moving from left
  // to right through the left half of the list, copying values over
  // to the sortedValues list as we go. This leftIndex variable will
  // help us keep track of our position.
  let leftIndex = 0;
  // At the same time, we'll also be moving from left to right through
  // the right half of the list and copying values over, so we need a
  // separate rightIndex variable to track that position as well.
  let rightIndex = 0;
  // We'll keep looping until we've processed all of the values in
  // both halves of the list.
  while (leftIndex < leftValues.length && rightIndex < rightValues.length) {
    // We're looking to copy over the lowest values first. So first we
    // test whether the current value on the left side is less than
    // the value on the right side.
    if (leftValues[leftIndex] < rightValues[rightIndex]) {
      // If the left side value is less, that's what we'll copy to the
      // sorted list.
      sortedValues.push(leftValues[leftIndex]);
      // And then we'll move to the next value in the left half of the
      // list.
      leftIndex++;
    }
    // Otherwise, the current value from the right half must have been
    // lower.
    else {
      // So we'll copy that value to the sorted list instead.
      sortedValues.push(rightValues[rightIndex]);
      // And then we'll move to the next value in the right half of
      // the list.
      rightIndex++;
    }
  }
  // At this point one of the two unsorted halves still has a value
  // remaining, and the other is empty. We won't waste time checking
  // which is which. We'll just copy the remainder of both lists over
  // to the sorted list. The one with a value left will add that
  // value, and the empty one will add nothing.
  sortedValues.push(...leftValues.slice(leftIndex));
  sortedValues.push(...rightValues.slice(rightIndex));
  // All the numbers from both halves should now be copied to the
  // sorted list, so we can return it.
  return sortedValues;
}

// Finally, we need to kick the whole process off. We'll call the
// mergeSort function with the list of numbers we loaded, and print
// the result.
console.log(mergeSort(numbers));




/* This solution below was generated by deepseek */
function mergeSort(arr) {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle); // Left half
    const right = arr.slice(middle);  // Right half

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {

    let result = []; // This will store the merged array
    let leftIndex = 0; // Pointer for the left array
    let rightIndex = 0; // Pointer for the right array

    // Compare elements from both arrays and add the smaller one to the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add any remaining elements from the right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]