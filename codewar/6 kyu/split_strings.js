// Link to the question on codewar - https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
/* NOTE: newArray += '_' changes the array to a string so methods meant for array won't work on it */

// AI generated solution
function solution(str) {
    let newArray = [];

    for (let i = 0; i < str.length; i += 2) {
        let cut = str.slice(i, i + 2);

        if (cut.length === 1) {
            cut += '_'; // Append underscore if it's a single character
        }

        newArray.push(cut);
    }

    return newArray;
}


function solution(str) {
    let newArray = [];


    for(let i = 0; i < str.length; i += 2){

        let cut = str.slice(i, i+2)


        if(cut.includes('_')){
            return newArray;
        }

        if(cut.length ===1){
            newArray.push(`${str[i]}_`);
            return newArray;
        }

        newArray.push(cut)

    }

    return newArray;
}

console.log(solution("abcdefh"))