function runProgram(input) {
    input = input.trim().split("\n");
    var [n,key] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    console.log(BinarySearch(arr,n,key))
   }

   function BinarySearch(arr,n,key){
       var l = 0;
       var r = n-1;

       while(l<r){
           var mid = Math.floor((l+r)/2);
           if(key===arr[mid]){
               return 1
           }
           else if(key<arr[mid]){
                r = mid-1;
           }
           else{
               l = mid+1;
           }
       }
       return -1
   }

   if (process.env.USERNAME === "HP") {
    runProgram(`5 0
    2 -2 0 3 4 1`);

}