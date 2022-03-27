function runProgram(input) {
    input = input.trim().split("\n");

    let testcase = +input[0];
    let line = 1;
    for (let i = 0; i < testcase; i++) {
        let n = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        arr.sort();
        console.log(optimize_majorityEleAlgo(n, arr))
    }

}

function optimize_majorityEleAlgo(n, arr) {


    for (let i = 0; i <= Math.floor(n / 2); i++) {
        if (arr[i] == arr[i + Math.floor(n / 2)]) {
            return arr[i];
        }
        if (arr.length === 1) {
            return arr[i]
        }

    }
    return -1;

}




if (process.env.USERNAME === "HP") {
    runProgram(`5
    7
    3 1 10 9 10 4 7
    3
    2 8 8
    6
    5 10 4 9 2 2
    9
    4 10 2 8 4 7 5 4 4
    9
    7 6 6 7 6 9 8 6 9`);
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
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}