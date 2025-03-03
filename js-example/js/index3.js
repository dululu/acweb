// 函数
// 函数是用对象来实现的，函数是 Function 对象的一个实例

let add = function (a, b) {
    return a + b;
}
let x = () => {
    return () =>{console.log("hello")};
}

let main3 = function () {
    console.log(add(1, 4));
    console.log(x()());
    
}

export {   
    main3,
}