//ES6

class Parent{
    constructor(){
        this.p = 'p'
    }
}

class Children extends Parent{
    constructor(){
        super();
    }
}

var child = new Children();
console.log(child.p)

console.log(Children.prototype instanceof Parent) //ture
console.log(Children.prototype.__proto__ == Parent.prototype); //true
console.log(Children.prototype.constructor == Children); //true


//ES5

function Parent(){
    this.p = 'p';
}

function Children(){
    Parent.call(this);
}

Children.prototype = new Parent();
Children.prototype.constructor = Children;


console.log(Children.prototype instanceof Parent) //ture
console.log(Children.prototype.__proto__ == Parent.prototype); //true
console.log(Children.prototype.constructor == Children); //true

//ES5 + Object.create

function Parent(){
    this.p = 'p';
}

function Children(){
    Parent.call(this);  //call 和 apply的区别是call的参数是一个个传入的，apply是数组。
}

Children.prototype = Object.create(Parent.prototype);
//Object create 会返回一个空的object，并且将这个object的__proto__指向Object.create的参数
//所以Children.prototype.__proto__ == Parent.prototype;
Children.prototype.constructor = Children;

console.log(Children.prototype instanceof Parent) //ture
console.log(Children.prototype.__proto__ == Parent.prototype); //true
console.log(Children.prototype.constructor == Children); //true