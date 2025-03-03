// link to question -> https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){

    let newSig = [signature[0], signature[1], signature[2]];

        let first, second, third, sum;

          if(n === 0){
            return []
          }

          if(n === 1){
            return newSig.slice(0,1)
          }

          if(n === 2){
            return newSig.slice(0,2)
          }

           for(let i = 0; i < n; i++){

            if(newSig.length === n){
                return newSig
            }
            first = newSig[i]
            second = newSig[i + 1]
            third = newSig[i + 2]

            sum = first + second + third

            newSig.push(sum)
        }

        return newSig

    }