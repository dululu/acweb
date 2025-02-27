let buf = "";
process.stdin.on("readable",function(){
    let chunk = process.stdin.read();
    if(chunk !== null){
        buf += chunk.toString();
    }
}); 
process.stdin.on("end",function(){
    let [x,y] = buf.split(' ').map(x => {return parseInt(x)});
    let res;
    if(x<y) res = y-x;
    else res = 24-x+y;
    console.log("O JOGO DUROU "+res+" HORA(S)");
});