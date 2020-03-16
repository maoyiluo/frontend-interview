//实现一个Queue，实现这么一个功能
//new Queue().add(function1, time1).add(function2, time2).execute();
//会在time1之后执行function1，[在function1执行完毕之后]再经过time2之后执行function2.

class Queue{
    constructor(){
        this.queue = []
    }
    add(cb, time){
        this.queue.push({cb:cb, time:time})
        return this
    }
    execute(){
        let event = new Promise((resolve, reject)=>{
            setTimeout(()=>{this.queue[0].cb(); resolve()}, this.queue[0].time);
        })
        for(let i = 1; i < this.queue.length; i++){
            event = event.then(()=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{this.queue[i].cb(); resolve()}, this.queue[i].time);
                })
            })
        }
    }
}

new Queue().add(()=>console.log(1), 1).add(()=>console.log(2),5).execute()
