function compAiSmallX(board,moves){
  var opponent = 'O'
  var self = 'X'
  console.log(moves)
  if (moves>0&&moves<10){
    //gave up on trying to be clever and decided to brute force it =_=
    winCheck(self,opponent,board)

  }
  else{
    addPiece(board,0,0,self)
  }
}

function compAiSmallO(board,moves){
console.log('i\'m o')
  var opponent = 'X'
  var self = 'O'
  winCheck(self,opponent,board)
}

function winCheck(self,opponent, board){
  console.log('here')
  //rowCheck
  if ((board[0][0]===self)&&(board[0][1]===self)&&(board[0][2]==='E')){
    addPiece(board,0,2,self);
  }else if ((board[0][0]===self)&&(board[0][2]===self)&&(board[0][1]==='E')){
    addPiece(board,0,1,self);
  }else if ((board[0][1]===self)&&(board[0][2]===self)&&(board[0][0]==='E')){
    addPiece(board,0,0,self);
  }else if ((board[1][0]===self)&&(board[1][1]===self)&&(board[1][2]==='E')){
    addPiece(board,1,2,self);
  }else if ((board[1][0]===self)&&(board[1][2]===self)&&(board[1][1]==='E')){
    addPiece(board,1,1,self);
  }else if ((board[1][1]===self)&&(board[1][2]===self)&&(board[1][0]==='E')){
    addPiece(board,1,0,self);
  }else if ((board[2][0]===self)&&(board[2][1]===self)&&(board[2][2]==='E')){
    addPiece(board,2,2,self);
  }else if ((board[2][0]===self)&&(board[2][2]===self)&&(board[2][1]==='E')){
    addPiece(board,2,1,self);
  }else if ((board[2][1]===self)&&(board[2][2]===self)&&(board[2][0]==='E')){
    addPiece(board,2,0,self);
  //column check
}else if ((board[0][0]===self)&&(board[1][0]===self)&&(board[2][0]==='E')){
    addPiece(board,2,0,self);
  }else if ((board[0][0]===self)&&(board[2][0]===self)&&(board[1][0]==='E')){
    addPiece(board,1,0,self);
  }else if ((board[1][0]===self)&&(board[2][0]===self)&&(board[0][0]==='E')){
    addPiece(board,0,0,self);
  }else if ((board[0][1]===self)&&(board[1][1]===self)&&(board[2][1]==='E')){
    addPiece(board,2,1,self);
  }else if ((board[0][1]===self)&&(board[2][1]===self)&&(board[1][1]==='E')){
    addPiece(board,1,1,self);
  }else if ((board[1][1]===self)&&(board[2][1]===self)&&(board[0][1]==='E')){
    addPiece(board,0,1,self);
  }else if ((board[0][2]===self)&&(board[1][2]===self)&&(board[2][2]==='E')){
      addPiece(board,2,2,self);
  }else if ((board[0][2]===self)&&(board[2][2]===self)&&(board[1][2]==='E')){
      addPiece(board,1,2,self);
  }else if ((board[1][2]===self)&&(board[2][2]===self)&&(board[0][2]==='E')){
      addPiece(board,0,2,self);
  // diagonal Check
}else if ((board[0][0]===self)&&(board[1][1]===self)&&(board[2][2]==='E')){
      addPiece(board,2,2,self);
  }else if ((board[1][1]===self)&&(board[2][2]===self)&&(board[0][0]==='E')){
      addPiece(board,0,0,self);
  }else if ((board[0][0]===self)&&(board[2][2]===self)&&(board[1][1]==='E')){
      addPiece(board,1,1,self);
  }else if ((board[0][2]===self)&&(board[1][1]===self)&&(board[2][0]==='E')){
      addPiece(board,2,0,self);
  }else if ((board[1][1]===self)&&(board[2][0]===self)&&(board[0][2]==='E')){
      addPiece(board,0,2,self);
  }else if ((board[0][2]===self)&&(board[2][0]===self)&&(board[1][1]==='E')){
      addPiece(board,1,1,self);
  //check for opponent wins
  }else{
    blockCheck(self,opponent,board);
  }
}
function blockCheck(self, opponent,board){
  //rowCheck
  console.log('blocking...')
  if ((board[0][0]===opponent)&&(board[0][1]===opponent)&&(board[0][2]==='E')){
    addPiece(board,0,2,self);
  }else if ((board[0][0]===opponent)&&(board[0][2]===opponent)&&(board[0][1]==='E')){
    addPiece(board,0,1,self);
  }else if ((board[0][1]===opponent)&&(board[0][2]===opponent)&&(board[0][0]==='E')){
    addPiece(board,0,0,self);
  }else if ((board[1][0]===opponent)&&(board[1][1]===opponent)&&(board[1][2]==='E')){
    addPiece(board,1,2,self);
  }else if ((board[1][0]===opponent)&&(board[1][2]===opponent)&&(board[1][1]==='E')){
    addPiece(board,1,1,self);
  }else if ((board[1][1]===opponent)&&(board[1][2]===opponent)&&(board[1][0]==='E')){
    addPiece(board,1,0,self);
  }else if ((board[2][0]===opponent)&&(board[2][1]===opponent)&&(board[2][2]==='E')){
    addPiece(board,2,2,self);
  }else if ((board[2][0]===opponent)&&(board[2][2]===opponent)&&(board[2][1]==='E')){
    addPiece(board,2,1,self);
  }else if ((board[2][1]===opponent)&&(board[2][2]===opponent)&&(board[2][0]==='E')){
    addPiece(board,2,0,self);
  //column check
}else if ((board[0][0]===opponent)&&(board[1][0]===opponent)&&(board[2][0]==='E')){
    addPiece(board,2,0,self);
  }else if ((board[0][0]===opponent)&&(board[2][0]===opponent)&&(board[1][0]==='E')){
    addPiece(board,1,0,self);
  }else if ((board[1][0]===opponent)&&(board[2][0]===opponent)&&(board[0][0]==='E')){
    addPiece(board,0,0,self);
  }else if ((board[0][1]===opponent)&&(board[1][1]===opponent)&&(board[2][1]==='E')){
    addPiece(board,2,1,self);
  }else if ((board[0][1]===opponent)&&(board[2][1]===opponent)&&(board[1][1]==='E')){
    addPiece(board,1,1,self);
  }else if ((board[1][1]===opponent)&&(board[2][1]===opponent)&&(board[0][1]==='E')){
    addPiece(board,0,1,self);
  }else if ((board[0][2]===opponent)&&(board[1][2]===opponent)&&(board[2][2]==='E')){
      addPiece(board,2,2,self);
  }else if ((board[0][2]===opponent)&&(board[2][2]===opponent)&&(board[1][2]==='E')){
      addPiece(board,1,2,self);
  }else if ((board[1][2]===opponent)&&(board[2][2]===opponent)&&(board[0][2]==='E')){
      addPiece(board,0,2,self);
  // diagonal Check
}else if ((board[0][0]===opponent)&&(board[1][1]===opponent)&&(board[2][2]==='E')){
      addPiece(board,2,2,self);
  }else if ((board[1][1]===opponent)&&(board[2][2]===opponent)&&(board[0][0]==='E')){
      addPiece(board,0,0,self);
  }else if ((board[0][0]===opponent)&&(board[2][2]===opponent)&&(board[1][1]==='E')){
      addPiece(board,1,1,self);
  }else if ((board[0][2]===opponent)&&(board[1][1]===opponent)&&(board[2][0]==='E')){
      addPiece(board,2,0,self);
  }else if ((board[1][1]===opponent)&&(board[2][0]===opponent)&&(board[0][2]==='E')){
      addPiece(board,0,2,self);
  }else if ((board[0][2]===opponent)&&(board[2][0]===opponent)&&(board[1][1]==='E')){
      addPiece(board,1,1,self);
  //the fork blockCheck
  }else if ((board[0][0]===opponent)&&(board[2][2]===opponent)&&(board[0][1]==='E')){
    addPiece(board,0,1,self);
  }else if ((board[0][2]===opponent)&&(board[2][0]===opponent)&&(board[0][1]==='E')){
    addPiece(board,0,1,self);
  //other moves
  }else{
    console.log(self)
    if (self==='O'){
      console.log ('O is here')
      movesO(self, board);
    }else if (self=='X') {
      movesX(self, board);
    }
  }
}
function movesO(self, board){
    console.log('moving')
    if (board[1][1]==='E'){
      addPiece(board,1,1,self);
    }else if (board[0][0]==='E') {
      addPiece(board,0,0,self);
    }else if (board[2][2]==='E') {
      addPiece(board,2,2,self);
    }else if (board[2][0]==='E') {
      addPiece(board,2,0,self);
    }else if (board[0][2]==='E') {
      addPiece(board,0,2,self);
    }
}
function movesX(self, board){
    if (board[0][0]==='E') {
      addPiece(board,0,0,self);
    }else if (board[2][2]==='E') {
      addPiece(board,2,2,self);
    }else if (board[2][0]==='E') {
      addPiece(board,2,0,self);
    }else if (board[0][2]==='E') {
      addPiece(board,0,2,self);
    }else if (board[1][1]==='E'){
      addPiece(board,1,1,self);
    }
}
function addPiece(board, col, row, self){
  console.log('adding piece')
  var square;
  board[col][row]=self;
  square=$("div").find("[col='"+col+"'][row='"+row+"']")
  square.text(self);
  square.css({color:'chartreuse'});
}

//idea to simplify winCheck and other functions above, trashed
// function rowCheck(board, ){
//   if ((board[0][0]===self)&&(board[0][1]===self)){
//     addPiece(board,0,0,self);
//   }
// }
// function colCheck(board, move){
//
// }
// function diagCheck(board){}
