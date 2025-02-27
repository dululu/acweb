let buf = "";
process.stdin.on("readable",function(){
    let chunk = process.stdin.read();
    if(chunk !== null){
        buf += chunk.toString();
    }
}); 

process.stdin.on("end",function(){
    let [x,y] = buf.split(' ').map(x => {return parseInt(x)});
    let p;
    if(x===1){
        p = 4.00;
    }else if(x===2){
        p = 4.50;
    }
    else if(x===3){
        p = 5.00;
    }
    else if(x===4){
        p = 2.00;
    }
    else if(x===5){
        p = 1.50;
    }
    console.log("Total: R$ "+(p*y).toFixed(2));
});