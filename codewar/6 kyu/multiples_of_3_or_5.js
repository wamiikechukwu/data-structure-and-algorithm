// Link to the question on codewar: https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {

    let sum = 0;

    if (number <= -1) {
        return 0
    }

    for (let i = 0; i < number; i++) {

        if((i % 3 == 0) || (i % 5 == 0)){
            sum += i
        }
    }

    return sum;

}

console.log(solution(16))