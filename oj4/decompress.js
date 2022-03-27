function runProgram(input) {
    input = input.trim().split('\n');

    // let str = input[0].trim().split(" ").toString();
    // 
    let testCase = +input[0];
    let line = 1;
    for (let i = 1; i <= testCase; i++) {
        let n = +input[line++]
        let str = input[line++].trim().split(" ").toString();
        Decompress(str)
    }


}

function Decompress(str) {
    let numbers = "123456789"
    let result = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] == str[i]) {
                let n =+str[i]
                for (let k = 0; k < n; k++) {
                    result = result + str[i - 1]
                }
            }

        }
    }
    console.log(result);
}



if (process.env.USERNAME === 'HP') {
    runProgram(`2
6
a2b1c2
6
a2c1a2`);
}

else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/$/, '');
        read = read.replace(/$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/$/, '');
        runProgram(read);
        process.exit(0);
    });
}