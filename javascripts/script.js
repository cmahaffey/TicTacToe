console.log('let\'s play');
//Test: make a tictactoe board as an array of arrays

function Board(size){
  this.board=[];
  for (var i=0;i<size;i++){
    this.board.push([]);
    for(var j=0;j<size;j++){
      this.board[i].push(' ');
    }
  }
  this.moves=0
}
//ToDo: board setup
Board.prototype.render = function render(){
  var game=$('<div>').addClass('board');
  var row;
  var square;
  for (var rows=0;rows<this.board.length;rows++){
    row=$('<div>').addClass('board-row');
    for (var squares=0;squares<this.board.length;squares++){
      square=$('<div>').addClass('square');
      index=[rows,squares]
      square.text(this.board[rows][squares]);
      this.player1Input(square,index);
      //add classes for top, bottom, borders
      if (rows%3===0){
        square.addClass('top');

      }else if (rows%3===1){
        square.addClass('center');

      }else if (rows%3===2){
        square.addClass('bottom');

      }
      if (squares%3===0){
        square.addClass('left');

      }else if (squares%3===1){
        square.addClass('middle');

      }else if (squares%3===2){
        square.addClass('right');

      }
      row.append(square)
    }
    game.append(row)
  }
  $('#container').append(game)

}

//Test: get an input-needs board set up
Board.prototype.player1Input=function playerInput(square, index){
  var scope=this
  square.on('click',function(){
    square.text('X');
    scope.board[index[0]][index[1]]='X'
    console.log(scope.board[index[0]][index[1]])
    console.log(scope);
    scope.getWin();
  });

}
Board.prototype.player2Input=function playerInput(square, index){
  var scope=this
  square.on('click',function(){
    square.text('O');
    scope.board[index[0]][index[1]]='O'
    console.log(scope.board[index[0]][index[1]])
    console.log(scope);
    scope.getWin();
  });

}
//Test statment, flip through sides X and O

//get a win
Board.prototype.getWin = function getWin(){
  for (var i=0;i<this.board.length;i++){

    if((this.board[i][0]==='X')&&(this.board[i][1]==='X')&&(this.board[i][2]==='X')){
      console.log('x wins 1')
    }else if ((this.board[0][i]==='X')&&(this.board[1][i]==='X')&&(this.board[2][i]==='X')) {
      console.log('x wins 2')
    }else if ((this.board[0][0]==='X')&&(this.board[1][1]==='X')&&(this.board[2][2]==='X')) {
      console.log('x wins 3')
    }else if ((this.board[0][2]==='X')&&(this.board[1][1]==='X')&&(this.board[2][0]==='X')) {
      console.log('x wins 4')
    }else if((this.board[i][0]==='O')&&(this.board[i][1]==='O')&&(this.board[i][2]==='O')){
      console.log('o wins 1')
    }else if ((this.board[0][i]==='O')&&(this.board[1][i]==='O')&&(this.board[2][i]==='O')) {
      console.log(i)
    }else if ((this.board[0][0]==='O')&&(this.board[1][1]==='O')&&(this.board[2][2]==='O')) {
      console.log('o wins 3')
    }else if ((this.board[0][2]==='O')&&(this.board[1][1]==='O')&&(this.board[2][0]==='O')) {
      console.log('o wins 4')
    }else if (this.moves>7){
      console.log('it\'s a tie')
    }
  }
}

//play

//choosing x or o

//1 or 2 player

//set name

//comp ai

//big boards

//window onload, for testing for now
$(document).ready(function(){
  var box = new Board(3)
  box.render()
  //box.playerInput()
  //box=[['R','R','R'],['R','R','R'],['R','E','R']];
  // getWin(box);
});
