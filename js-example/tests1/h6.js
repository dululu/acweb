let buf = "";
process.stdin.on("readable",function(){
    let chunk = process.stdin.read();
    if(chunk !== null){
        buf += chunk.toString();
    }
});

process.stdin.on("end",function(){
    let [a,b] =  buf.split(' ').map(x => {return parseInt(x)});

    if (a%b===0 || b%a===0){
        console.log("Sao Multiplos");
    }else{
        console.log("Nao sao Multiplos");
    }

});