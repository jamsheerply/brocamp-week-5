class Stack {
  constructor() {
    this.item = []
  }
  push(val) {
    this.item.push(val)
  }
  popp() { 
    return this.item.pop()
  }
  middel(){
    let temp=new Stack()
    let mid=Math.floor(this.item.length/2)
    for(let i=0;i<mid;i++){
      temp.push(this.item.pop())
    }
    let del=this.item.pop()
    for(let i=0;i<mid;i++){
    this.item.push(temp.popp())
    }
    return del
  }
  print(){
    console.log(this.item)
  }
}
const s=new Stack()
s.push(100)
s.push(200)
s.push(300)
s.print()
s.middel()
s.print()