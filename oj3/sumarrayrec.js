
function runProgram(input) {
    var input = input.trim().split("\n");
    var testCase = +input[0];
    var line = 1;

    for(let i = 0;i < testCase;i++) {
        var size = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        // console.log(size,arr);
        console.log(sum(arr))
    }
      
}

function sum(arr) {
    if(arr.length < 1 ){
        return 0;
    }

    return arr.pop() + sum(arr)
}

if (process.env.USERNAME === "HP") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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