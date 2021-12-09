const shift = (array, direction, n) => {
    let result = []
    let array_left
    let array_right
    let count
    if (array.length > 0 && direction && n > 0) {
        if (direction === 'left') {
            array_left = [...array]
            array_right = []
            count = 0
            while (count < n) {
                array_right.push(array[count])
                array_left.shift()
                count++
            }
        }

        if (direction === 'right') {
            array_left = []
            array_right = [...array]
            count = array.length
            let round = n
            while (round > 0) {
                array_right.pop()
                round--
            }
            round = n
            while (round <= count) {
                array_left.push(array[round - 1])
                round++
            }
        }
        result = [...array_left, ...array_right]
    }
    return result
}

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 3))
console.log(shift([1, 2, 3, 4, 5], 'right', 3))