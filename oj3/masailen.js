
function runProgram(input) {
    var input = input.trim();
    // console.log(input);
  var ans = countlength(input);
      console.log('ans:', ans)
      
}
function countlength(s) {
    if(s=="") {
        return 0;
    }
    return countlength(s.substring(1)) + 1;
}


if (process.env.USERNAME === "HP") {
    runProgram(`masaischool`);
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