function runProgram(input) {
    input=input.split("\n")
    var testcases =+input[0]
   var line = 1;

   for(let i = 0;i <testcases;i++) {
       let str = input[line++].trim().split(" ");
  console.log(stack2(str.join(" ")));
// console.log(str)
       
   }


  
   }


   function stack2(str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
 // If character is an opening brace add it to a stack
    for (let i = 0; i < str.length; i++) {

      //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
       
        else {
            let last = stack.pop();

           
            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {
                return "not balanced";
            };
        }
     // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
    }
    if (stack.length !== 0) {
        return "not balanced"
    };

    return "balanced";
       
}


   if (process.env.USERNAME === "HP") {
    runProgram(`4
               {([])}
               ()
               ([]
            [{)){}}[})
`);
  } else {
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