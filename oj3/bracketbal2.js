function runProgram(input) {
    input=input.split("\n")
    var testcases =+input[0]
   var line = 1;

   for(let i = 0;i <testcases;i++) {
       let str = input[line++].trim().split(" ");
    //    console.log(str);
  console.log(stack(str));
       
   }


  
   }

    function stack(str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

      
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
       
        else {
            let last = stack.pop();

           
            if (str[i] !== map[last]) {return false};
        }
    
        if (stack.length !== 0) {return false};

    return true;
}
}

      
   
   
        if (process.env.USERNAME === "HP") {
          runProgram(`3
                     {([])}
                     ()
                     ([]
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