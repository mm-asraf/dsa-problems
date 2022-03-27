function runProgram(input) {
    input = input.trim().split("\n");

    let n = +input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b)
    let start = 0;
    let end = n - 1;
    console.log(rotatedLargest(arr, start, end));

}

function rotatedLargest(arr, start, end) {

    let mid = Math.floor(start + (end - start) / 2);
    if (end == start) {
        return arr[start]
    }

    if (mid == 0 && arr[mid] > arr[mid + 1]) {
        return arr[mid]
    }

    if (mid < end && arr[mid + 1] < arr[mid] && mid > 0 && arr[mid] > arr[mid - 1]) {
        return arr[mid];
    }

    if (arr[start] > arr[mid]) {
        return rotatedLargest(arr, low, mid - 1)
    } else {
        return rotatedLargest(arr, mid + 1, end);
    }

}




if (process.env.USERNAME === "HP") {
    runProgram(`5
6 7 8 1 4`);
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