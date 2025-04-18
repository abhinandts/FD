const arr = [0, 0, 7, 8, 0, 2, 0, 1, 2,]

function move(arr) {
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] == 0) {

            let temp = arr[right]
            arr[right] = arr[left]
            arr[left] = temp

            left++
        }
    }
    return arr
}

let movedArray = move(arr)

console.log(movedArray)