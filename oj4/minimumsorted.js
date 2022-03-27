function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    let ans = rotatedAlgo(n, arr)
    console.log(ans);

}

function rotatedAlgo(n, arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] < arr[mid - 1]) return arr[mid];

        else if (arr[mid] > arr[mid + 1]) return arr[mid + 1];


        if (arr[end] > arr[mid]) {
            end = mid - 1;
        } else if (arr[end] < arr[mid]) {
            start = mid + 1;
        }
        if (arr[end] === arr[start]) return arr[start]


    }
}


if (process.env.USERNAME === 'HP') {
    runProgram(`10
4 6 7 9 10 -1 0 1 2 3`);
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