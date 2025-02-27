let buf = "";
process.stdin.on("readable",function() {
    let chunk = process.stdin.read();
    if(chunk) buf += chunk.toString();
});

process.stdin.on("end",function() {
    let lines = buf.split("\n");
    let [x1,y1] = lines[0].split(" ").map(x => parseFloat(x));
    let [x2,y2] = lines[1].split(" ").map(x => parseFloat(x));

    console.log(Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)).toFixed(4));
});