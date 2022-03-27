function runProgram(input) {
    input = input.trim().split("\n");
    
    let test = +input[0].trim()
    let line = 1;

    for(let i = 0;i < test;i++) {
        let st = input[line++].trim().toString()
        let str = input[line++].trim().toString()
      
       let ans =  checkSubStr(st,str)
       console.log(ans);
    }

}

function checkSubStr(st,str) {
    let check = false;

    for(let i = 0;i < st.length;i++) {
        for(let j = 0;j < str.length;j++) {
            if(st.charAt[i] == str.charAt[j] ) return 'YES'
              return 'NO'
            
        }
       
    }
      
}



if (process.env.USERNAME === "HP") {
runProgram(`2
abc
adbce
ax
xaa`);
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
  read = read.replace(/\n$/,  "");
  runProgram(read);
});
 process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
 }