function runProgram(input) {
    input = input.trim().split("\n");
    let [rows, cols] = input[0].trim().split(" ").map(Number);
    let mat = []
    for (let i = 1; i <= rows; i++) {
        mat.push(input[i].trim().split(" ").map(Number));
    }
    console.log(reverseArray(rows, cols, mat))

}

function reverseArray(rows, cols, arr) {
    let mat = [];
    for (let i = 0; i <= rows - 1; i++) {
        for (let j = cols - 1; j >= 0; j--) {
            mat.push(arr[i][j])
        }
    }
    return mat.join(" ")
}



if (process.env.USERNAME === "HP") {
    runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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