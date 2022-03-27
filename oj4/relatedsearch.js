function runProgram(input) {
    input = input.trim().split("\n")
    let [n] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    let k = input[2].trim().split(" ").map(Number)

    occurrences(arr, k)
}

function lowerBound(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1
    while (low <= high) {
        var mid = Math.floor(low + (high - low) / 2)
        if (arr[mid] == k) {
            ans = mid;
            high = mid - 1
        }
        else if (arr[mid] > k) {
            high = mid - 1
        }

        else {
            low = mid + 1
        }

    }
    return ans
}

function upperBound(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1
    let mid = 0;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (arr[mid] <= k) {
            ans = mid;
            low = mid + 1
        }
        else {

            high = mid - 1
        }
    }
    return ans
}


function occurrences(arr, k) {
    let lob = lowerBound(arr, k)

    let uppb = upperBound(arr, k)

    let answer = uppb - lob + 1
    let res = lob + " " + uppb + " " + answer
    console.log(res)
}



if (process.env.USERNAME === "HP") {
    runProgram(`6
                 1 1 1 2 2 2	
                 1`);

} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("high", function () {
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