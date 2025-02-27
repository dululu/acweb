let buf = "";
process.stdin.on("readable",function() {
   let chunk =  process.stdin.read();
   if(chunk) buf+= chunk.toString();//把任意的字符串变成string

});

process.stdin.on("end",function() {
    let [a,b] = buf.split(' ').map(x => {
        return parseInt(x);
    });//将数组里的每个元素全部应用function,即元素x
    console.log(a+b);
})
