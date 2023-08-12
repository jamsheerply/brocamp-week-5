function qs(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1];
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...qs(left), pivot, ...qs(right)]
}
arr = [-2, 25, -6, 30, 10]
console.log(qs(arr))