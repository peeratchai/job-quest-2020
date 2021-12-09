
const fizzBuzz = (num) => {

    if(num > 0){
        return ((num % 3 === 0 ? 'Fizz' : '') + (num % 5 === 0 ? 'Buzz' : ''))
    }
}

console.log(fizzBuzz(21))
console.log(fizzBuzz(25))
console.log(fizzBuzz(45))