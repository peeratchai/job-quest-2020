
const sortArray = (array) => {
    let sort_array = array

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (sort_array[i] > sort_array[j]) {
                temp_data = sort_array[i]
                sort_array[i] = sort_array[j]
                sort_array[j] = temp_data
            }
        }
    }
    return { sort_array, max: sort_array[sort_array.length - 1] }
}

const secondMax = (array) => {
    let secondMax
    if (array.length > 0) {
        let { sort_array, max } = sortArray(array)
        if (sort_array.length === 1) {
            return sort_array[0]
        } else {
            let count = sort_array.length - 2
            secondMax = 0
            while (secondMax === 0) {
                if (count < 0) {
                    secondMax = max
                } else {
                    if (sort_array[count] < max) {
                        secondMax = sort_array[count]
                    }
                    count--
                }
            }
            return secondMax
        }
    } else {
        return 'Error!'
    }

}

console.log(secondMax([2, 3, 4, 5]))
console.log(secondMax([9, 2, 21, 21]))
console.log(secondMax([4, 4, 4, 4]))
console.log(secondMax([4123]))
console.log(secondMax([]))