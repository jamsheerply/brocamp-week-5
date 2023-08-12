function ms(arr){
  if(arr.length<2) return arr
  let mid=Math.floor(arr.length/2)
  let leftarr=arr.slice(0,mid)
  let rightarr=arr.slice(mid)
  return merge(ms(leftarr),ms(rightarr))
}
function merge(leftarr,rightarr){
  const sortedArr=[]
  while(leftarr.length&&rightarr.length){
    if(leftarr[0]<=rightarr[0]){
      sortedArr.push(leftarr.shift())
    }else{
      sortedArr.push(rightarr.shift())
    }
  }
  return [...sortedArr,...leftarr,...rightarr]
}
arr=[10,-2,3,-4,5]
console.log(ms(arr))