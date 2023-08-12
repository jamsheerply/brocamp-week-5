class stack{
  constructor(){
    this.item={}
    this.size=0;
  }
  push(val){
    this.item[this.size]=val
    this.size++
  }
  pop(){
    if(this.size==0) return console.log("empty")
    delete this.item[this.size-1]
  this.size--
  }
  print(){
    console.log(this.item)
  }
}
const s=new stack()
s.pop()
s.print()
s.push(10)
s.push(20)
s.push(30)
s.print()
s.pop()
s.print()