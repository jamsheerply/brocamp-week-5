class queue {
  constructor() {
    this.item = {}
    this.head=0
    this.tail=0
  }
  enqueue(val){
this.item[this.tail]=val
this.tail++
  }
  print(){
    console.log(this.item)
  }
  dequeue(){
    let del=this.item[this.head]
    delete this.item[this.head]
    this.head++
    return del
  }
  peak(){
    console.log(this.item[this.head])
  }
  isempty(){
    return this.head-this.tail===0
  }
}
const q=new queue()
q.enqueue(10)
q.enqueue(10)
q.enqueue(10)
q.dequeue()
q.dequeue()
// q.print()
// q.peak()
console.log(q.isempty())
