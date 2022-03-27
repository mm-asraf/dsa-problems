function runProgram(input) {
    input = input.trim().split("\n");

    let testcase = +input[0];
    let line = 1;
    for (let i = 0; i < testcase; i++) {
        let n = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        let majo = majorityMoore_votingAlgo(n, arr)
        console.log(majority(n, arr, majo))
    }
}
//difficult in implementation

function majority(n, arr, majo) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] == majo) {
            count++;
        }
    }
    if (count > Math.floor(n / 2)) {
        return arr[majo]
    }
}


function majorityMoore_votingAlgo(n, arr) {

    let maj = 0;
    let count = 1;

    for (let i = 0; i < n; i++) {
        if (arr[maj] === arr[i]) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            maj = i;
            count = 1;
        }
    }


}


if (process.env.USERNAME === "HP") {
    runProgram(`2
    6
    1 1 1 1 2 3
    5
    1 1 2 2 3`);
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