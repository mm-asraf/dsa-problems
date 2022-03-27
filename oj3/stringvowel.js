function runProgram(input) {
    input = input.trim().split("\n");
    console.log(vowelAlgo(input))

}

function vowelAlgo(str) {
    let n = str.length;
    let vowel = 'aiou'
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let res = ""
        for (let j = i; j < str.length && vowel.length; j++) {
            res += str[j]
            count++;
            if (res.includes("a") && res.includes("i") && res.includes("o") && res.includes("u")) {

            }
        }
    }
    return count;
}



if (process.env.USERNAME === "HP") {
    runProgram(`dangerouscovid`);
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