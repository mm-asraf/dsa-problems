
function runProgram(input) {
    var input = input.trim().split("\n");
    var testCase = +input[0];
    var line = 1;

    for (let i = 0; i < testCase; i++) {
        let size = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        var arr2 = input[line++].trim().split(" ").map(Number);

        // console.log(size,arr,arr2);
         common(size, arr, arr2);
     
        
    }

}


function common(size, arr, arr2) {
    var count = 0;
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (arr[i] == arr2[j])  {
                count++;
                arr2[j]==null;
                
            }
        }
    }
    console.log(count);
}


if (process.env.USERNAME === "HP") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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