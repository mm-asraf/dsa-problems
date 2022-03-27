
function runProgram(input) {
    var input = input.trim().split("\n");
    var testCase = +input[0];
    var line = 1;

    for(let i = 0;i < testCase;i++) {
        var size = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        // console.log(size,arr);
        
    }
    
    class Stack {
        constructor() {
          this.stack = [];
        }
      
        isEmpty() {
          return this.stack.length === 0;
        }
      
        push(num) {
          this.stack.push(num);
        }
      
        pop() {
          if (this.isEmpty()) {
            throw "Stack Underflow";
          }
          return this.stack.pop();
        }
      
        peek() {
          if (this.isEmpty()) {
            return null;
          }
          return this.stack[this.stack.length - 1];
        }
      }
      
      function nearestGreater(arr) {
        const stack = new Stack();
        let result = [];
      
        for (let i = arr.length - 1; i >= 0; i--) {
          if (stack.isEmpty()) {
            result.push(-1);
            stack.push(arr[i]);
          } else if (!stack.isEmpty()) {
            while (!stack.isEmpty() && arr[i] > stack.peek()) {
              stack.pop();
            }
            if (stack.isEmpty()) {
              result.push(-1);
            } else {
              result.push(stack.peek());
            }
            stack.push(arr[i]);
          }
        }
      
        result.reverse();
        return result;
      }
      
    
     
    console.log(nearestGreater(arr));


}





if (process.env.USERNAME === "HP") {
    runProgram(`1
    5
    5 4 1 3 2 `);
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