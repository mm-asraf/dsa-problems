// var runningSum = function(nums) {

//  for(let i = 1;i < nums.length;i++) {
//      console.log(i);
//      nums[i] = nums[i] + nums[i-1]
//      console.log("me"+nums[i]);
//      console.log("this"+nums[i-1]);
//  }
   
//     return nums
// };

// let ans = runningSum([1,2,3,4])
// console.log(ans);


// var maximumWealth = function(accounts) {
 
//     let maxCount = 0
//     for(let i = 0;i < accounts.length;i++) {
//         let sum = 0
//         for(let j = 0;j < accounts[i].length;j++) {
          
//             sum+=accounts[i][j]
//             maxCount = Math.max(sum,maxCount) 
//         }
//     }
//     return maxCount
      
// };

// let ans = maximumWealth([[1,2,3],[3,2,1]])
// console.log(ans);

// var arr = [[1,2], [3,4], [5,6]];

// for (var i=0; i < arr.length; i++) {
 // i = 0, then we loop below:
//  console.log(' ------')
//  for (var j=0; j < arr[i].length; j++) {
//  console.log('here2 ------')

   //here we loop through the array which is in the main array
   //in the first case, i = 0, j = 1, then we loop again, i = 0, j = 1
  //  console.log(arr[i][j]);
   //after we finish the stuff in the 'j' loop we go back to the 'i' loop 
   //and here i = 1, then we go down again, i, remains at 1, and j = 0, then j = 1
   //....rinse and repeat, 
//  }
// }

// let arr = [1,2,3,4,5,6]

//   let ans = 0;
//   for(let i = 0;i < arr.length;i++) {
//      for(let j = 0;j < arr[i].length;j++) {
         
//       console.log(arr[i][j]);
//      }
//  }

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log(`Sub-array ${i}: ${arr[i]}`);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(`Element ${j}: ${arr[i][j]}`);
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);