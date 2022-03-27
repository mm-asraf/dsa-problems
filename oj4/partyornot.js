function runProgram(input) {
    input = input.trim().split("\n")
    let[n,c,r] = input[0].trim().split(" ").map(Number);
    let n1 = input[1].trim().split(" ").map(Number);
    
  
   
}


if (process.env.USERNAME === "HP") {
    runProgram(`5 3 24
    6 4 21 20 13
    `);

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