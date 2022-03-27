function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    console.log(setOddEven(n, arr))

}

function setOddEven(n, arr) {
    let odd = []
    let even = []

    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }

    odd.sort((a, b) => (a - b))
    even.sort((a, b) => (a - b))

    return odd.concat(even).join(" ")
}



if (process.env.USERNAME === "") {
    runProgram(`5
2 5 1 4 2 `);
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