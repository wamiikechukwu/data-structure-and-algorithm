/* Bubble sort is used in sorting an array - it check the first two items in an array and then swap them
 * Quadratic time O(n^2)
 * good for small data set and bad for large data set.
 */

const oArray = [4, 5, 35, 52, 24, 85, 8, 6, 442, 25, 7, 88, 9, 4, 84, 5]

function bubbleSort(array) {

    for (let i = 0; i < oArray.length - 1; i++) {

        for (let k = 0; k < oArray.length - i - 1; k++) {
            if (oArray[k] < oArray[k + 1]) {
                // Swap elements using temporary variable
                const temp = oArray[k];
                oArray[k] = oArray[k + 1];
                oArray[k + 1] = temp;
            }
        }

        console.log()
    }

    return array
}

console.log("Sorted array:", bubbleSort(oArray))
