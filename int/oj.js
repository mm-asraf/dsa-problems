function runProgram(input) {
    input = input.trim().split("\n");

    var test = +input[0];
    var line = 1;
    for (let i = 0; i < test; i++) {
        var n = +input[line++];
        var mat = [];
        for (let j = 0; j < n; j++) {
            mat.push(input[line++].trim().split(" ").map(Number));
        }

        console.log(matSpi(n, mat))
    }

}




function matSpi(n, arr) {
    let mat = []

    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= n - 1; j++) {
            mat.push(arr[i][j])
        }
    }
    return mat;
}


if (process.env.USERNAME === "HP") {
    runProgram(`1
3 
1 2 3
4 5 6
7 8 9`);
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