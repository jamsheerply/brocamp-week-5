class queue{
  constructor(){
    this.queue=[]
  }
  enqueue(val){
    this.queue.push(val)
  }
  dequeue(){
    return this.queue.shift()
  }
  print(){
    console.log(this.queue)
  }
  peek(){
    if(this.queue==0){
      return null
    }else{
      console.log(this.queue[0])
      return this.queue[0]
    }
  }
}
const s=new queue()
s.enqueue(10)
s.enqueue(20)
s.enqueue(30)
s.print()
s.peek()
s.dequeue()
s.print()