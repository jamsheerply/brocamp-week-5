function iS(arr) {
  let arrd=arr;
  for (let i = 1; i < arrd.length; i++) {
    let temp = arrd[i]
    let j = i - 1
    while (j >= 0 && arrd[j] > temp){
      arrd[j+1]=arrd[j]
      j--
    }
    arrd[j+1]=temp
  }
  return arrd
}
arr=[20,10,-2,13,-6]
console.log(iS(arr))  