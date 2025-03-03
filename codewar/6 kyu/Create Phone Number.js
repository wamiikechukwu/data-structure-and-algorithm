// Link to the question on code war: https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers){

    let str = '(';

    for(let i = 0; i < numbers.length; i++){

        str += numbers[i]

        if( i === 2){
            str += ") "
        }

        if( i === 5){
            str += "-"
        }
    }

    return str;
    // "(123) 456-7890"

}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))