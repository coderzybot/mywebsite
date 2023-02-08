const Promise =require('./promise.js')

console.log(Promise)
const promise = new Promise((res,rej)=>{
        // res('成功')
    rej('失败')
})


promise.then((res)=>{
    console.log('res',res)
},(err)=>{
    console.log('err',err)
})
promise.then((res)=>{
    console.log('res',res)
},(err)=>{
    console.log('err',err)
})
console.log('promise',promise)
