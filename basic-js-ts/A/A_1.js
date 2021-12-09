
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

const fib = (n) => {
    if (n > 0) {
        let old_data = 1
        let result = 1
        let temp_result = 0
        for (let i = 0; i < n - 2; i++) {
            temp_result = result
            result += old_data
            if (i !== 0) {
                old_data = temp_result
            }
        }
        return result
    }else{
        return 'N < 0'
    }
}

console.log(fib(1))
console.log(fib(3))
console.log(fib(12))
