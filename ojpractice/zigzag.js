function runProgram(input) {
    input = input.trim().split('\n');

    let [rows,cols] = input[0].trim().split(" ").map(Number);
    let mat = [];
    for(let i = 1;i <= rows;i++) {
        mat.push(input[i].trim().split(" ").map(Number));
    }

    traverse(rows,cols,mat)

}

function traverse(rows,cols,mat) {
    let ans = [];
    for(let i = 0;i<=rows-1;i++) {
        if(i%2!=0) {
            for(let j = 0;j <= cols-1;j++) {
                ans.push(mat[i][j])
            }
        }else {
            for(let j = cols-1;j >= 0;j--) 
          
            ans.push(mat[i][j])
        }
        
       
}
console.log(ans.join(" "));

}

if (process.env.USERNAME === 'HP') {
runProgram(`5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`);
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