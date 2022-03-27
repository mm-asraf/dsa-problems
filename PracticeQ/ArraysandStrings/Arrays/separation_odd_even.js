function runProgram(input) {
    input = input.trim().split("\n");

    let testCase = +input[0];
    let line = 1;
    for (let i = 0; i <= testCase; i++) {
        let n = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        let s = +input[line++]
        console.log(n)
        console.log(arr)
        console.log(s)
    }

}

function separate(n, arr) {
    let odd = [];
    let even = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }



}



if (process.env.USERNAME === "HP") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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