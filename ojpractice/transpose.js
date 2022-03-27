function runProgram(input) {
  input = input.trim().split("\n");
  let [r, c] = input[0].trim().split(" ").map(Number);

  let mat = [];
  for (let i = 1; i <= r; i++) {
    mat.push(input[i].trim().split(" ").map(Number))
  }
  let ans = transpose(r, c, mat)
  console.log(ans);
}

function transpose(r, c, mat) {
  let ans = [];

  for (let j = 0; j < c; j++) {
    ans[j] = Array(r);
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      ans[j][i] = mat[i][j] + " ";
    }
  }
  return ans;
}




if (process.env.USERNAME === "HP") {
  runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
}

else {
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