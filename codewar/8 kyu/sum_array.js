// Link to the question on codewar : https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
function sum (numbers) {

    if(numbers.length <= 0){
        return 0;
    }

    let sumOfNumber = 0;

    for(let i = 0; i < numbers.length; i++){
        sumOfNumber += numbers[i];
    }

    return sumOfNumber;
  }

console.log(sum([1, 5.2, 4, 0, -1]))