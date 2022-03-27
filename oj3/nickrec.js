
function runProgram(input) {
    var input = input.trim().split("\n");
    var testCase = +input[0];
    var line = 1;

    for (let i = 0; i < testCase; i++) {

        var arr = input[line++].trim().split(" ").map(Number);
        console.log(hacks(arr));

    }

}

function hacks(x) {
    if (x == 0) {
        return s;
    }

    for (var i = 0; i < x.length; i++) {
        if (x[i] == 1 || x[i] == 1 * 10 || x[i] == 1 * 20 || x[i] == 1 * 10 * 20) {
            return 'Yes';
        } else {
            return 'No';
        }
    }
}

if (process.env.USERNAME === "HP") {
    runProgram(`100
    1465
    591
    1789
    1197
    1826
    152
    671
    137
    296
    1616
    1225
    1435
    1687
    1866
    1604
    1820
    513
    450
    884
    2000
    20
    1
    2
    3
    4
    5
    10
    20
    30
    40
    50
    55
    65
    64
    32
    1000
    1200
    1600
    1400
    100
    98
    200
    300
    400
    600
    1574
    1441
    1709
    342
    69
    900
    1384
    1098
    158
    1787
    548
    834
    245
    236
    1661
    534
    1164
    335
    745
    799
    1795
    1195
    1841
    514
    1970
    277
    1511
    1729
    1814
    200
    872
    479
    719
    1630
    1325
    1398
    1674
    1957
    1851
    1297
    650
    1389
    1926
    1216
    927
    1119
    1430
    1219
    1523
    84
    676
    1180
    1242
    1434
    422`);
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