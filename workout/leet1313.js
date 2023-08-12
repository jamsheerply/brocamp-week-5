arr=[1,2,3,4,5,6]
let temp=[]
for(let i=0;i<arr.length;i++){
  let freq=arr[i]
 let val=arr[i+1]
  for(let j=0;j<freq;j++){
    temp.push(val)

  }
  i++
}
console.log(temp)