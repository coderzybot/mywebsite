class Promise{
    constructor(executor){
       this.ybTloop=[] //成功的结果
       this.ybFloop=[] //失败的结果
       this.state ='pendding'
       this.value=undefined//成功结果
       const res=(value)=>{
        this.state='success'
        this.value=value
        this.ybTloop.forEach(fn => fn(value));
       }
       const rej=(value)=>{
        this.state='err'
        this.value=value
        console.log('vvvv',value)
        this.ybFloop.forEach(fn =>fn(value));
       }
       executor(res,rej)
    }
    then(onResovle,onReject){
        let promise1= new Promise(()=>{
            if(this.state==="success"){
                onResovle(this.value)
            }
            if(this.state==="err"){
                onReject(this.value)
            }
            if(this.state==="pendding"){
                console.log('等待')
                this.ybTloop.push(onResovle)
                this.ybFloop.push(onReject)
                console.log(this.ybTloop,this.ybFloop)
            }
        })
        return promise1
    }
}
module.exports=Promise
