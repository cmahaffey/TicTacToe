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
  this.moves=0;
  this.xplays=true;
  this.oplays=false;
  this.onePlayer=false;
  this.twoPlayer=false;
  this.game=$('<div>').addClass('board');
}
//ToDo: board setup
Board.prototype.render = function render(){
  $('.players').remove();
  $('.winrar').remove();
  var row;
  var square;
  var scope = this;
  for (var rows=0;rows<this.board.length;rows++){



    row=$('<div>').addClass('board-row');
    for (var squares=0;squares<this.board.length;squares++){


      square=$('<div>').addClass('square');
      square.attr({
        col: squares,
        row: rows
      });
      // index=[rows,squares]
      square.text(this.board[rows][squares]);

      //DOESN'T WORK ON ROWS
      console.log(this.xplays)


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
    this.game.append(row)
  }
  $('#container').append(this.game);

  $('.square').on('click', function(e) {

    console.log('hi');

    var square = $(e.target);
    var index = [
      square.attr('row'),
      square.attr('col')
    ];

    if (scope.xplays){
      scope.player1Input(square, index);
    }else if (scope.oplays) {
      scope.player2Input(square, index);
    }
  });



  // if (this.xplays){
  //   this.player1Input(square,index);
  // }else if (this.oplays) {
  //   this.player2Input(square,index);
  // }
}

//Test: get an input-needs board set up
Board.prototype.player1Input= function player1Input(square, index){

  console.log(index);
  var scope=this;
  // square.on('click',function(){
    square.text('X');
    scope.board[index[0]][index[1]]='X'
    // console.log(scope.board[index[0]][index[1]])
    // console.log(scope);
    scope.getWin();
  // });
  // Flip through sides X and O
  this.xplays=false;
  this.oplays=true;
  this.moves++;
}
Board.prototype.player2Input=function player2Input(square, index){
  var scope=this;
  console.log(index);
  // square.on('click',function(){
    square.text('O');
    scope.board[index[0]][index[1]]='O'
    // console.log(scope.board[index[0]][index[1]])
    // console.log(scope);
    scope.getWin();
  // });
  // Flip through sides X and O
  this.oplays=false;
  this.xplays=true;
  this.moves++;
}



//get a win
Board.prototype.getWin = function getWin(){
  for (var i=0;i<this.board.length;i++){

    if((this.board[i][0]==='X')&&(this.board[i][1]==='X')&&(this.board[i][2]==='X')){
      return this.winMessage('X');
    }else if ((this.board[0][i]==='X')&&(this.board[1][i]==='X')&&(this.board[2][i]==='X')) {
      return this.winMessage('X');
    }else if ((this.board[0][0]==='X')&&(this.board[1][1]==='X')&&(this.board[2][2]==='X')) {
      return this.winMessage('X');
    }else if ((this.board[0][2]==='X')&&(this.board[1][1]==='X')&&(this.board[2][0]==='X')) {
      return this.winMessage('X');
    }else if((this.board[i][0]==='O')&&(this.board[i][1]==='O')&&(this.board[i][2]==='O')){
      return this.winMessage('O');
    }else if ((this.board[0][i]==='O')&&(this.board[1][i]==='O')&&(this.board[2][i]==='O')) {
      return this.winMessage('O');
    }else if ((this.board[0][0]==='O')&&(this.board[1][1]==='O')&&(this.board[2][2]==='O')) {
      return this.winMessage('O');
    }else if ((this.board[0][2]==='O')&&(this.board[1][1]==='O')&&(this.board[2][0]==='O')) {
      return this.winMessage('O');
    }else if (this.moves>7){
      console.log('it\'s a tie')
    }
  }
}

//play

//choosing x or o

//1 or 2 player
Board.prototype.numPlayers= function numPlayers(){
  var onePlayer=$('<button>').addClass('players');
  var twoPlayer=$('<button>').addClass('players');
  onePlayer.text('1 player');
  twoPlayer.text('2 player');
  var scope=this
  twoPlayer.on('click',function(){
    scope.render()
  })
  this.game.append(onePlayer);
  this.game.append(twoPlayer);
  $('#container').append(this.game)
}

//set name
Board.prototype.playerNames=function playerNames(num){

  // <div class="player first">
  //   <h2>Player 1</h2>
  //   </h4>Wins: 0</h4>
  // </div>
  // <div class="player second">
  //   <h2>Player 2</h2>
  //   </h4>Wins: 0</h4>
  // </div>
}

//
Board.prototype.winMessage= function winMessage(winner){

  $('.board-row').remove();//
  announcement=$('<h3>').addClass('winrar');
  announcement.text(winner+' wins!');
  reset=$('<button>').addClass('winrar');
  reset.text('Play again?');
  scope=this
  reset.on('click',function(){
    //returns the previously won game, needs to be reset
    scope.render();
  });
  //adds twice for some reason
  this.game.append(announcement);
  this.game.append(reset);
  //$('#container').append(this.game);
}

//comp ai

//big boards

//window onload, for testing for now
$(document).ready(function(){
  var box = new Board(3)
  box.numPlayers()
  //box.playerInput()
  //box={board:[['R','R','R'],['R','R','R'],['R','R','R']]}
  // getWin(box);
});
