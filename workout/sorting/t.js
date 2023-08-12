function bs(arr){
  let swap;
do{
  swap=false
    for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1])
    var temp=arr[i]
    arr[i]=arr[i+1]
    arr[i+1]=temp
    swap=true
    }
  }while(swap)
}
arr=[1,2,3,4,5,6,7]
bs(arr)
console.log(arr)