function runProgram(input) {
    input = input.trim().split('\n');

    let testCase = +input[0];
    let line = 1;

    for (let i = 0; i < testCase; i++) {
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(longSub(arr));
    }

}

function longSub(arr) {

    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[j - 1]) {
                count++;
            } else {

                break;
            }
        }
        if (ans < count) {
            ans = count;
        }

    }
    return ans;

}




if (process.env.USERNAME === 'HP') {
    runProgram(`2
2
1 1
6
1 2 1 2 3 1
`);
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