function p(s) {
  let arr = s.split("")
  console.log(arr)
  let k = 0;
  let b = arr.length - 1;
  for (let i = 0; i <(arr.length - 1)/2; i++) {
    let flag = 1
    if (arr[i] !== arr[b]) {
      return false
    // } else if (arr[i] == arr[b] && i !== k) {
    //   flag = 0
    } else {
      return true
    }
    k++;
    b--;
  }
  if (Flag = 0){return true} 

}
let s = "abda"

console.log(p(s))