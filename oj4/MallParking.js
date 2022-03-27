function runProgram(input) {
    input = input.trim().split("\n");
    let k = +input[0]
    let arrival = input[1].trim().split(" ").map(Number);
    let departure = input[2].trim().split(" ").map(Number);

    let ans = MallParking(arrival, departure, k);
    console.log(ans)

}

function MallParking(arrival, departure, size) {
    let count = 0;
    for (let i = 0; i < arrival.length; i++) {
        if (arrival[i + 1] <= departure[i]) {
            count++;
        }
    }
    if (count < size) {
        return "Possible"
    }
   return "Not Possible"
}

if (process.env.USERNAME === "HP") {
    runProgram(`1
                1 3 5
                2 6 8`);

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

