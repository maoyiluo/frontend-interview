//一个简单的自己实现的new

function my_new(f,...arr){ 
    let obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj,arr);
    return obj;
}

function Children(name, age){
    this.age = age;
    this.name = name;
}

child = my_new(Children, "jack", 15) // 等价于 new Children("jack", 15)
console.log(child.__proto__ == Children.prototype);