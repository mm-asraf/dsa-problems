var solveNQueens = function(n) {

    let board = new Array(n).fill(null).map(row => new Array(n).fill('.'));
    let output = []
   function putqueen(row , board ){
   
       //base case
       if(row == board.length) {
           let temparr = []
           for(let row of board){
               temparr.push(row.join(''));
           }
           output.push(temparr);
           return;
       }
       
       for(let  j=0 ; j<board[row].length ; j++){
           if(canplace(row , j , board)){
               board[row][j] =  'Q'
               // placing the queen and moving to the next row
               putqueen(row+1 , board);
               // backtracking part 
               board[row][j] = '.'
           }   
       }
   }
   
   function canplace(row , col , board){
    
         // checking for upperrow
           for( let i=row-1 ; i>=0 ; i-- ){
               if(board[i][col] == 'Q') return false;
           }
           
       //checking for upper left diagonal
           for(let i = row-1 , j=col-1 ; i>=0 && j>=0 ;j-- , i-- ){
               if(board[i][j] == 'Q') return false;
           }
       
          // checking for upper right diagonal
           for(let i= row-1 , j = col+1 ;  i >= 0  && j < board.length ; i-- , j++){
               if(board[i][j] ==  'Q') return false;
           }
       
       
       return true;
   }
   
   putqueen(0  , board)
   return output;
     };