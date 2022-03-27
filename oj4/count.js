function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" " ).map(Number);
    
    dig(arr)
    

}


function dig(arr) {
    let objec = {};
    for(let i = 0; i < arr.length; i++) {
        if(objec[arr[i]] === undefined) {
            objec[arr[i]] = 1;

        }else {
            objec[arr[i]] = objec[arr[i]] + 1;
        }
    }
    let val = Object.values(objec);
    console.log(val.join(" "));
}


if (process.env.USERNAME === "HP") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0
    `);

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