function runProgram(input) {
    input = input.trim().split('\n');

    let str1 = input[0].trim().split(" ").toString();
    let str2 = input[1].trim().split(" ").toString();

    let ans = similar(str1, str2);
    console.log(ans);
}

function similar(str1, str2) {
    let count = 0;

    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str2.length; j++) {
            if(str1[i] == str2[j]) {
                count++
            }
        }
    }
    return count;
}





if (process.env.USERNAME === 'HP') {
runProgram(`eziowiomkvrrdzx
orugiebaolddavd`);
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