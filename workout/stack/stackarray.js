class stack{
  constructor(){
    this.items=[]
  }
  push(val){
    this.items.push(val)
  }
  pop(){
    this.items.pop()
  }
  peak(){
    this.items[this.items.length-1]
  }
  isEmpty(){
    return this.items.length === 0
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString())
  }
}
const sttack =new stack()
console.log(sttack.isEmpty())
sttack.push(10)
sttack.push(20)
sttack.push(30)
sttack.print()
sttack.pop()
sttack.print()