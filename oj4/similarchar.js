function runProgram(input) {
    input = input.trim().split('\n');

    let str1 = input[0].trim().split(" ").toString();
    let str2 = input[1].trim().split(" ").toString();

    let ans = similar(str1, str2);
    console.log(ans);
}

function similar(A, B) {
    let n = A.length, k = Infinity, a = [], b = [];
    for (i in A) {
        a.push(A[i]);
        b.push(B[i]);
    }
    let stack = [[0, 0, a]]
    while (stack[0] != undefined) {
        let [i, cnt, s] = stack.pop();
        while (i < n && s[i] == b[i]) {
            i += 1;
        }
        if (i == n && cnt < k) {
            k = cnt;
        } else if (i < n) {
            for ( let j = i + 1; j < n; j++) {
                if (s[j] == b[i] && s[j] != b[j]) {
                    let ls = Array.from(s);
                    [ls[i], ls[j]] = [ls[j], ls[i]];
                    stack.push([i + 1, cnt + 1, ls]);
                }
            }
        }
    }
    return k;
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