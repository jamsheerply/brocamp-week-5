function ss(arr) {
  let arrd = arr;
  for (let i = 0; i < arrd.length - 1; i++) {
    for (let j = i + 1; j < arrd.length; j++) {
      if (arrd[i] > arrd[j]) {
        let temp = arrd[i]
        arrd[i] = arrd[j]
        arrd[j] = temp
      }
    }
  }
  return arrd
}
arr = [1, 2, 3, 15, 10, 5]
console.log(ss(arr))