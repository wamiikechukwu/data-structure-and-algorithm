// const data  = [1,6,8,44,2,67,8,99,4,7,28,5,8,9,99,5,55,5]
const data  = [1,6,8,44,2]

for(let i=0; i< data.length - 1;i++){
    for(let k = 0; k < data.length - i; k++){

        if(data[k] > data[k + 1]){
            data.splice(k)
        }

    }

}