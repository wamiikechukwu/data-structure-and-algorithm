// Link to the question on codewar: https://www.codewars.com/kata/523f5d21c841566fde000009

function check(a,b){
    const items =[];

    for(let i of a){
        if(!b.includes(i)){
            items.push(i)
        }
    }

    return items;
}
function arrayDiff(a, b) {
    const result = []; // Array to store the result

    // Loop through each element in list a
    for (let i = 0; i < a.length; i++) {
        let found = false; // Flag to check if the element is in list b

        // Loop through each element in list b
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true; // If the element is found in b, set flag to true
                break; // Exit the inner loop early
            }
        }

        // If the element was not found in b, add it to the result
        if (!found) {
            result.push(a[i]);
        }
    }

    return result;
}


// console.log(arrayDiff([1, 4, 5, 2, 2, 5, 5, 1], [1, 1, 2]))
console.log(check([1, 4, 5, 2, 2, 5, 5, 1], [1, 1, 2]))