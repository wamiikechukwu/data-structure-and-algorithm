function digitize(n) {

    const newArray = [];

    for (let i = n.toString().length - 1; i >= 0; i--) {
        newArray.push(Number(n.toString()[i]))
    }

    return newArray;
}

console.log(digitize(1598745))