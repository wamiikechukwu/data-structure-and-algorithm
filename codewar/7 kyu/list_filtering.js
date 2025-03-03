function filter_list(l) {
    const newArray = [];

    for (let i = 0; i < l.length; i++) {

        if (typeof l[i] !== 'string') {
            newArray.push(l[i])
        }
    }

    return newArray;
}

console.log(filter_list([1,2,'a','b']))