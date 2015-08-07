console.log('let\'s play');
//Test: make a tictactoe board as an array of arrays
var p1wins=0;
var p2wins=0;

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
  $('center').remove();
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
}

//Test: get an input-needs board set up
Board.prototype.player1Input= function player1Input(square, index){
  if (this.board[index[0]][index[1]]===' '){
  //var scope=this;
  // square.on('click',function(){
    square.text('X');
    this.board[index[0]][index[1]]='X'
    // console.log(scope.board[index[0]][index[1]])
    // console.log(scope);
    this.getWin();
  // });
  // Flip through sides X and O
    this.xplays=false;
    this.oplays=true;
    this.moves++;
  }
}
Board.prototype.player2Input=function player2Input(square, index){
  if (this.board[index[0]][index[1]]===' '){
  //var scope=this;
  // console.log(index);
  // square.on('click',function(){
    square.text('O');
    this.board[index[0]][index[1]]='O'
    // console.log(scope.board[index[0]][index[1]])
    // console.log(scope);
    this.getWin();
  // });
  // Flip through sides X and O
    this.oplays=false;
    this.xplays=true;
    this.moves++;
  }
}



//get a win
Board.prototype.getWin = function getWin(){
  for (var i=0;i<this.board.length;i++){
    console.log(this.moves)
    if((this.board[i][0]==='X')&&(this.board[i][1]==='X')&&(this.board[i][2]==='X')){
      this.xwins++;
      return this.winMessage('X');
    }else if ((this.board[0][i]==='X')&&(this.board[1][i]==='X')&&(this.board[2][i]==='X')) {
      this.xwins++;
      return this.winMessage('X');
    }else if ((this.board[0][0]==='X')&&(this.board[1][1]==='X')&&(this.board[2][2]==='X')) {
      this.xwins++;
      return this.winMessage('X');
    }else if ((this.board[0][2]==='X')&&(this.board[1][1]==='X')&&(this.board[2][0]==='X')) {
      this.xwins++;
      return this.winMessage('X');
    }else if((this.board[i][0]==='O')&&(this.board[i][1]==='O')&&(this.board[i][2]==='O')){
      this.owins++;
      return this.winMessage('O');
    }else if ((this.board[0][i]==='O')&&(this.board[1][i]==='O')&&(this.board[2][i]==='O')) {
      this.owins++;
      return this.winMessage('O');
    }else if ((this.board[0][0]==='O')&&(this.board[1][1]==='O')&&(this.board[2][2]==='O')) {
      this.owins++;
      return this.winMessage('O');
    }else if ((this.board[0][2]==='O')&&(this.board[1][1]==='O')&&(this.board[2][0]==='O')) {
      this.owins++;
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
  onePlayer.on('click',function(){
    scope.insertName(1)
  });
  twoPlayer.on('click',function(){
    scope.insertName(2)
  });
  this.game.append(onePlayer);
  this.game.append(twoPlayer);
  $('#container').append(this.game)
}

//set name
Board.prototype.playerNames=function playerNames(){
  firstPlayer=$('<div>').addClass('player first');
  secondPlayer=$('<div>').addClass('player second');
  firstName=$('<h2>');
  firstName.text('____________');
  firstScore=$('<h4>');
  firstScore.text('Wins: 0');
  secondName=$('<h2>');
  secondName.text('Computer');
  secondScore=$('<h4>');
  secondScore.text('Wins: 0');
  firstPlayer.append(firstName);
  firstPlayer.append(firstScore);
  secondPlayer.append(secondName);
  secondPlayer.append(secondScore);
  $('#container').append(firstPlayer);
  $('#container').append(secondPlayer);
}
//allows player to insert a name
Board.prototype.insertName=function insertName(num){
  $('.players').remove();
  var input=$('<input>').addClass('name');
  var submit=$('<button>').addClass('name');
  submit.text('submit');
  var nameRequest=$('<p>').addClass('name');
  var centering=$('<center>')
  nameRequest.text("Please put in the player's name");
  var scope=this
  if (num===1){
    submit.on('click',function(){
      $('.first h2').text(input.val());
      scope.render();
    });
  }else if (num===2) {
    submit.on('click',function(){
      $('.first h2').text(input.val());
      input.val('')
      submit.on('click',function(){
        $('.second h2').text(input.val());
        scope.render();
      });
    });
  }
  //
  //     if (num===2){
  //       nameRequest.text("Please put in the player "+1+"'s name");
  //       submit.on('click',function(){
  //           $('.first h2').text(input.val());
  //           num--;
  //
  //       });
  //     }else if (num===1) {
  //       ("Please put in the player "+2+"'s name");
  //       submit.on('click',function(){
  //         $('.second h2').text(input.val());
  //         scope.render();
  //     });
  //   }
  centering.append(nameRequest);
  centering.append(input);
  centering.append(submit);
  this.game.append(centering);
  $('#container').append(this.game);
}

//changes the screen to announce who won
Board.prototype.winMessage= function winMessage(winner){

  $('.board-row').remove();//
  announcement=$('<h3>').addClass('winrar');
  //add an if for the tie eventuality
  announcement.text(winner+' wins!');
  reset=$('<button>').addClass('winrar');
  reset.text('Play again?');
  scope=this
  reset.on('click',function(){
    //returns the previously won game, needs to be reset
    //reset board
    for (var i=0;i<scope.board.length;i++){
      for (var j=0;j<scope.board.length;j++){
        scope.board[i][j]=' ';
      }
    }
    //reset box
    scope.moves=0;
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
  box.playerNames()

  //box.playerInput()
  //box={board:[['R','R','R'],['R','R','R'],['R','R','R']]}
  // getWin(box);
});
