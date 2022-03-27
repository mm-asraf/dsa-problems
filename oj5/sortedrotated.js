function runProgram(input) {
    input = input.trim().split("\n");

    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    console.log(sortedAlgo(arr, k))


}

function sortedAlgo(arr, k) {

    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] == k) {
            return i;
        }
    }
    return -1;
}



if (process.env.USERNAME === "HP") {
    runProgram(`5 1
3 4 5 1 2`);
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