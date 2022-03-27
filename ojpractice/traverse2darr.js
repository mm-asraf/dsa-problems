function runProgram(input) {
    input = input.trim().split('\n');

    let [rows,cols] = input[0].trim().split(" ").map(Number);
    let mat = [];
    for(let i = 1;i <= rows;i++) {
        mat.push(input[i].trim().split(" ").map(Number));
    }

    console.log(mat);

   let ans = traverse(rows,cols,mat);
   console.log(ans);

}

function traverse(rows,cols,mat) {

    let ans = [];
    for(let i = 0;i <= cols-1;i++) {
        for(let j = rows-1;j >= 0;j--)  {
            ans.push(mat[j][i]);
        }
    }
    return ans.join(" ");

}

if (process.env.USERNAME === 'HP') {
runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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