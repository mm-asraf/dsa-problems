function runProgram(input) {
    input = input.trim().split("\n")
   let tetCases = +input[0]
   let line = 1;

   for(let i = 0; i < tetCases; i++) {
        let [m,n] = input[line++].trim().split(" ").map(Number);
        let m1 = input[line++].trim().split(" ").map(Number);
        let n1 = input[line++].trim().split(" ").map(Number);
        
        console.log(dance(m,n))
   }
   
}

function dance(boy,girl) {
   
   if(boy < girl) {
       return "YES"
   }
    
   if(girl == boy) {
       return "NO";
   }
   return "NO"
}


if (process.env.USERNAME === "HP") {
    runProgram(`10
    2 8
    135 101
    170 125 79 159 163 65 106 146
    2 8
    162 92
    196 143 28 37 192 5 103 154
    3 3
    22 117 119
    96 48 127
    2 9
    70 113
    68 100 36 95 104 12 123 134 74
    5 2
    112 54 69 148 45
    63 158
    8 10
    124 142 130 179 117 36 191 43
    89 107 41 143 65 49 47 6 91 130
    1 1
    7
    102
    4 9
    30 24 85 155
    157 41 167 177 132 109 145 40 27
    4 8
    139 119 83 130
    142 34 116 40 59 105 131 178
    7 4
    187 22 146 125 73 71 30
    178 174 98 113        
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