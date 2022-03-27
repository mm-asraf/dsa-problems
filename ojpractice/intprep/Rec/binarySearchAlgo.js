function runProgram(input) {
    input = input.trim().split("\n");

    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(binarySearchAlgo(arr, k));

}

function binarySearchAlgo(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (k === arr[mid]) {
            return mid
        }
        if (k > arr[mid]) {
            start = mid + 1;
        } else if (k < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}



if (process.env.USERNAME === "HP") {
    runProgram(`6 5
11 34 5 4 21 0`);
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