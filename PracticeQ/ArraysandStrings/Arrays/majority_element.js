function runProgram(input) {
    input = input.trim().split("\n");

    let testcase = +input[0];
    let line = 1;
    for (let i = 0; i < testcase; i++) {
        let n = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(majorityElementAlgo(n, arr))
    }

}


function majorityElementAlgo(n, arr) {
    let maxCount = 0;
    let index = -1;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }

        }
        if (count > maxCount) {
            maxCount = count;
            index = i;
        }

    }

    if (maxCount > Math.floor(n / 2)) {
        return arr[index]
    }
    return -1;

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