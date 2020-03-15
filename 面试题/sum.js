//写一个sum函数，需要实现的功能是sum(1)(2)
//原题里要求的是sum(1)(2).valueof()才返回值，这个我不知道怎么实现。

function sum(...arr){
    result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i];
    }
    return next = (...arr)=>{
        console.log(result);
        for(let i = 0; i < arr.length; i++){
            result = result+arr[i];
        }
        return next;
    }
}

console.log(sum(0)(1)());