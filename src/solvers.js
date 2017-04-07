/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

 window.searchMatrix = function (row, n, board, chesspiece, callback) {
     //base case when we exhausted all rows
    if (row === n){
      callback();  
      return; 
    };

      // i represents the col index
      for (var i=0; i<n; i++) {  
      // place piece on the row  
        board.togglePiece(row, i);

        if ( !board[chesspiece]() ) {
          searchMatrix(row+1, n, board, chesspiece, callback);
        } 
      // unplace piece  
        board.togglePiece(row, i);   
      };
  };

window.findNRooksSolution = function(n) {
  //n =number of rooks
  //make a temp array that contains each of the possible combinations

  var board = new Board({n:n}); 
  var solutions = [];
  var solution;

  // base case: 
  // for-loop that places a node at each value in the row
  // given that there are no row conflicts or column conflicts.  
  searchMatrix(0, n, board, 'hasAnyRooksConflicts', function(){
    solutions.push(board.rows().map(function(row){
      return row.slice();
    }));
  }); 
   
  // recursion:
  // goes through each row in the matrix and runs the base case
  // increases the rowIdx. 

  solution = solutions[0]; 
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
 
  return solution;

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n}); 
  var solutionCount = 0;
  
  searchMatrix(0, n, board, 'hasAnyRooksConflicts', function(){
    solutionCount++; 
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  // var solutions = [];
  // var solution; 

  searchMatrix(0, n, board, 'hasAnyQueensConflicts', function(){
    board.rows().map(function(row){
      return row.slice();
    });
  }); 

  solution = solution || board.rows(); 

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};












