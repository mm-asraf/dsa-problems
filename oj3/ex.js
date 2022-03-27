
function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
    var exp1 = +input[0];
    var n = +input[1];
    // console.log(exp1,n);
   var ans = exp(exp1,n);
   console.log(ans.toFixed(4))

}

function exp(ex,n) {
   
 if (n == 0){
     return 1;
 }

return exp(ex,n-1+ 1*ex/1*n)
}



if (process.env.USERNAME === "HP") {
    runProgram(`4 2`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });

}