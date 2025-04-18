let array = [1, 22, 34, 1, 2, 3, 2, 44, 5, 3, 2, 3, 45, 2];

function move(array, value) {

    let i = 0;
    let j = array.length - 1;

    while (i > j) {
        if (array[j] != value || array[i] === value) {
            let temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
        i++
        j--
    }
    return array;
}

console.log(move(array, 2));