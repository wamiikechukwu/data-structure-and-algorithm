// Link to the question on codewar: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {

    let i;

    switch (names.length) {
        case 0:
            i = "no one likes this"
            break;
        case 1:
            i = `${names[0]} likes this`
            break;
        case 2:
            i = `${names[0]} and ${names[0]} likes this`
            break;
        case 3:
            i = `${names[0]}, ${names[1]} and ${names[2]} likes this`
            break;
        default:
            i = `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`
            break;
    }

    return i;
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Iyke", "James"]))
// likes(["Alex", "Jacob", "Mark", "Max"])