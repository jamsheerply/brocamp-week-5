function bs(arr) {
  let arr1 = arr
  let swap;
  do {
    swap = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr1[i] > arr1[i + 1]) {
        let temp = arr1[i]
        arr1[i] = arr1[i + 1]
        arr1[i + 1] = temp
        swap = true
      }
    }
  } while (swap)
  return arr1
}
let arr = [-2, 10, 22, 15, -16]
// bs(arr)
console.log(bs(arr))