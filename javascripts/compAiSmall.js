function compAiSmallX(board){
  console.log('i\'m x')
  var moves=0;
  if (moves>0&&moves<4){

  }
  else{
    addX(board,0,0)
  }
  moves++;
}

function compAiSmallO(board){
console.log('i\'m o')

}

function addX(board, col, row){
  var square;
  board[col][row]="X";
  square=$("div").find("[col='"+col+"'][row='"+row+"']")
  square.text('X');
  square.css({color:'chartreuse'});
}

function addO(board, col, row){
  var square;
  board[col][row]="O";
  square=$("div").find("[col='"+col+"'][row='"+row+"']")
  square.text('O');
  square.css({color:'chartreuse'});
}
