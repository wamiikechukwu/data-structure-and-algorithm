// link to the question: https://www.codewars.com/kata/59d12056dcc405ac130000d3/train/javascript

function chickenOptions(n) {

    if (typeof n !== 'number') {
        return [0]
    }
    const boxes = [0, 3, 6, 10];

    const newArray = new Array(n + 1).fill(false)
    newArray[0] = true;

    for (let i = 1; i <= n; i++) {

        for (newbox of boxes) {
            if (i - newbox >= 0 && newArray[i - newbox]) {
                newArray[i] = true;
                break;
            }
        }
    }

    return newArray.map((isPossible, index) =>
        isPossible ? index : -1
    ).filter(index => index !== -1)

}

console.log(chickenOptions(13))