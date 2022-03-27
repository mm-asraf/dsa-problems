function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0].trim();
    let arr1 = input[1].trim().split(" ").map(Number);
    let arr2 = input[2].trim().split(" ").map(Number);

    arrayIntersection(arr1, arr2);
}

function arrayIntersection(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {

                console.log(arr1[i]);
            }
        }
    }

}



if (process.env.USERNAME === 'HP') {
    runProgram(`3
4 5 7
9 2 5`);
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