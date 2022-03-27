function runProgram(input) {
    input = input.trim().split("\n");
    fibo(+input)

}

function fibo(n) {
    let t1 = 0;
    let t2 = 1;

    let next = n;
        console.log(t1,t2);
    for(let i = 3;i <=n;i++) {
        console.log(next)
        t1 = t2;
        t2 = next;
        next = t1+t2;
    }
    
}




if (process.env.USERNAME === "HP") {
runProgram(`10`);
}

else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/,  "");
  runProgram(read);
});
 process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
 }