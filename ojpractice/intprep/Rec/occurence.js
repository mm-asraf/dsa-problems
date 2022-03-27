function runProgram(input) {
    input = input.trim().split("\n");

    let [n, t] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    let ans = freqOccurence(arr, t)
    console.log(ans);

}

function lowerbound(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (k === arr[mid]) {
            ans = mid;
            end = mid - 1;
        } else if (k > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return ans;
}

function upperbound(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (k === arr[mid]) {
            ans = mid;
            start = mid + 1;
        } else if (k > arr[mid]) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }

    return ans;
}

function freqOccurence(arr, k) {
    let lower = lowerbound(arr, k);
    let upper = upperbound(arr, k);

    if (lowerbound == -1 && upperbound == -1) {
        return 0;
    } else {

        let ans = upper - lower + 1
        return ans
    }
}


if (process.env.USERNAME === "HP") {
    runProgram(`6 3
2 3 3 3 6 9`);
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