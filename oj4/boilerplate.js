"function runProgram(input) {",
    "input = input.trim().split();",
    "const size = +input[0];",
    "const arr = input[1].trim().split(' ').map(Number);",
  
  "}",
  "if (process.env.USERNAME === 'HP') {",
    "runProgram(``);",
  "} else {",
   "process.stdin.resume();",
   "process.stdin.setEncoding('ascii');",
   "let read = '';",
   " process.stdin.on('data', function (input) {",
   "   read += input;",
   " });",
    "process.stdin.on('end', function () {",
    "  read = read.replace(/\n$/, '');",
    "  read = read.replace(/\n$/, '');",
    "  runProgram(read);",
    "});",
   " process.on('SIGINT', function () {",
    "  read = read.replace(/\n$/, '');",
    "  runProgram(read);",
    "  process.exit(0);",
    "});",
 " }"
  
  
  
  
  