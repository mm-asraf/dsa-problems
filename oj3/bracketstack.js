function runProgram(input) {
    input=input.split("\n")
    var testcases =+input[0]
   var line = 1;

   for(let i = 0;i <testcases;i++) {
       let str = input[line++].trim().split(" ");
    //    console.log(str);
       if(stackbal(str)){
           console.log('balanced');
       }else{
           console.log('unbalanced')
       }
       
   }


  
   }


   function stackbal(str) {
       let n = str.length;
       let stack = [];
       

      for(let i = 0;i < n;i++) {
          if(str[i] == '(' || str[i] == '{' || str[i] == '[') {
              stack.push(str[i]);
          }
          else if(str[i] == ')') {
              if(stack.length == 0 && stack.top() == '(') {
                stack.pop();
              }
          }
          else if(str[i] == '}') {
              if(stack.length == 0 && stack.top() == '{') {
                  stack.pop();
              }
          }
          else if(str[i] == ']') {
              if(stack.length == 0 && stack.top() == '[') {
                  stack.pop();
              }
          }

          
      }
      return (stack.length==0)
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