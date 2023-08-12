class Node{
  constructor(val){
    this.value=val
    this.next=null
  }
}
class StackList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }
  enqueue(val){
    const node=new Node(val)
    if(this.size==0){
      this.head=node
      this.tail=node
    }else{
      this.tail.next=node;
      this.tail=node;
    }
    this.size++
  }
  dequeue(){
    let del=this.head;
    this.head=this.head.next
    this.size--
  }
  print(){
    if(this.size==0){
      console.log("empty")
    }else{
      let curr=this.head
      while(curr){
        console.log(curr.value)
        curr=curr.next
      }
    }
  }
}
const q=new StackList()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
// q.print()
q.dequeue()
q.print()