class Stack{
  constructor(){
    this.items=[]
  }
  push(val){ 
  this.items.push(val)
  }
  pop(){
    return this.items.pop()
  }
  print(){
    console.log(this.items)
  }
}
const s=new Stack()
str="hello"
for(let i=0;i<str.length;i++){
  s.push(str[i])
}
s.print()
let temp=""
while(s.items.length){
  temp=temp+s.pop()
}
console.log(temp)
if(str===temp){
  console.log("palindrome")
}else{
  console.log("not palindrome")
}