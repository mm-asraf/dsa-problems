
 var maximumWealth = function(accounts) {
   
    var maxSum = 0
     for(let i = 0;i < accounts.length;i++) {
         var sum = 0;
       console.log(i+"----")
         for(let j = 0;j < accounts[i].length;j++) {
             console.log(j)
             sum+=accounts[i][j];
             maxSum = Math.max(sum,maxSum);
            
         }
     }
   return maxSum;
 };
 
 let arr1 = [
     [1,2,3],
     [1,2,3],
 ];
//  console.log(maximumWealth(arr));

let arr = [2,3,5,6,7];

function check(arr) {
  for(let i = 0;i < arr.length;i++) {
    for(let j = i+1;j < arr.length;j++) {
      console.log(i,j)
    }
  }
  
}
  
check(arr)