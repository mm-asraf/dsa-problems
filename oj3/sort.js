function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = +input[0];

    var line = 1
    for (var i = 0; i < testcases; i++) {
        var size = +input[line++].trim()
        var arr1 = input[line++].trim().split(" ").map(Number)
        var arr2 = input[line++].trim().split(" ").map(Number)

        var obj1 = {}
        for (var el of arr1) {
            if (obj1[el] == null) {
                obj1[el] = 1
            } else {
                obj1[el]++
            }
        }


        var obj2 = {}
        for (var el of arr2) {
            if (obj2[el] == null) {
                obj2[el] = 1
            } else {
                obj2[el]++
            }
        }
        key1 = Object.keys(obj1)
        key2 = Object.keys(obj2)
        //  console.log((key1))
        //  console.log(key2)

        var count = 0
        for (var j = 0; j < key1.length; j++) {
            for (var k = 0; k < key2.length; k++) {
                if (key1[j] == key2[k]) {
                    count++
                }
            }
        }
    }
    console.log(count)
}


if (process.env.USERNAME === "bali") {
    runProgram(`1
                6
                1 2 7 9 4 5
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