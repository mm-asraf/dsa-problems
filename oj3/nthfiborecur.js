
function runProgram(input) {
    var input = +input.trim();

    var ans = fiboRecursion(input)
    console.log(ans);

}

function fiboRecursion(n) {
    if (n < 2) {
        return n;
    }
    return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}





if (process.env.USERNAME === "HP") {
    runProgram(`5`);
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