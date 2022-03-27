
function runProgram(input) {
    var input = +input.trim();
    // console.log(input);
   var ans = facRecursion(input)
  console.log(ans);
      
}

function facRecursion(n) {
    if(n == 0 || n == 1) {
        return 1;
    }
    return n*facRecursion(n-1)
}





if (process.env.USERNAME === "HP") {
    runProgram(`4`);
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