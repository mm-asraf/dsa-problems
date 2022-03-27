function runProgram(input) {
    input = input.trim().split("\n");

    let [n, target] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    let ans = upperBoundAlgorithm(arr, target)
    console.log(ans);

}

function upperBoundAlgorithm(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let res = -1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (target < arr[mid]) {
            res = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return res;
}



if (process.env.USERNAME === "HP") {
    runProgram(`10 3
0 2 4 4 5 5 7 7 9 10`);
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