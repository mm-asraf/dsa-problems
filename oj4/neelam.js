function runProgram(input) {
    input = input.trim().split("\n");

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number);

    console.log(neelamsJourney(arr))


}

function neelamsJourney(arr) {
    let sum = 0;
    let less = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (less <= arr[i]) {
            sum = sum + less
        }
        else {
            less = arr[i]
            sum = sum + less
        }
    }
    return sum;
}

if (process.env.USERNAME === "HP") {
    runProgram(`5
    4 7 8 3 4`);

} else {
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