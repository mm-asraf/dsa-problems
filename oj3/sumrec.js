
function runProgram(input) {
    var input = input.trim().split("\n");
    var testcases = +input[0];
    var line = 1;

    for(let i = 0; i < testcases; i++) {
        var size = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        // console.log(size,arr);
       console.log(fiboRecursion(arr))
    }
    

      
}

function fiboRecursion(n) {
    if(n == 0) {
        return 0;
    }
   for(var i = 1; i < n; i++) {
       return abs(n[i] + n[i-1]);
   }
}





if (process.env.USERNAME === "HP") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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