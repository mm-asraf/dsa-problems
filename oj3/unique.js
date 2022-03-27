
function runProgram(input) {
    input = input.trim().split(" ");
    var strin = input[0];
    var answer = chracterUni(strin)
    if (answer) {
        console.log("Unique")
    }
    else {
        console.log("No")
    }

}
function chracterUni(str) {
 var objec = {};
    for (var el of str) {
        if (objec[el] == null) {
            objec[el] = 1
        }
        else {
            objec[el]++
        }
    }

    var value = Object.values(objec)
    var n = value.length;
    for (var i = 0; i < n; i++) {
        if (value[i] !== 1) {
            return false;
        }
        else {
            continue;
        }
    }
    return true;
}


if (process.env.USERNAME === "HP") {
    runProgram(`masai`);
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