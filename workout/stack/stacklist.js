class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}
class StackList {
  constructor() {
    this.head = null
    this.size = 0
  }
  preek(){
    return console.log(this.head.value)
  }
  push(val) {
    const node = new Node(val)
    if (this.size == 0) { 
      this.head = node; 
    } else{
      node.next=this.head
      this.head=node
    }
    this.size++
  }
  pop(){
    let del=this.head
    this.head=this.head.next
    this.size--
    return del

  }
  print(){
    if(this.size==0){
      console.log("empty")
    }else{
      let curr=this.head
      while(curr!==null){
        console.log(curr.value)
        curr=curr.next;
      }
    }
  }
}
const s=new StackList()
s.push(10)
s.push(20)
s.push(30)
// s.print()
// console.log()
s.pop()
s.print()
s.preek()