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
  this.players;
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
      square.attr('col'),
      square.attr('row')
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
    this.moves++;
    // console.log(scope.board[index[0]][index[1]])
    // console.log(scope);

  // });
  // Flip through sides X and O
    if (this.players===2){
      this.xplays=false;
      this.oplays=true;
      this.getWin();}
    else{
      //this.getWin();
      this.compAi();
      // aiFunction();
    }

  }
}
Board.prototype.player2Input=function player2Input(square, index){
  if (this.board[index[0]][index[1]]===' '){
  //var scope=this;
  // console.log(index);
  // square.on('click',function(){
    square.text('O');
    this.board[index[0]][index[1]]='O'
    this.moves++;
    // console.log(scope.board[index[0]][index[1]])
    // console.log(scope);
    // this.getWin();
  // });
  // Flip through sides X and O
    if (this.players===2){
      this.xplays=true;
      this.oplays=false;
      this.getWin();}
    else{
      //this.getWin();
      this.compAi();
      //this.compAi();
    }
  }
}



//get a win
Board.prototype.getWin = function getWin(){
  for (var i=0;i<this.board.length;i++){
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
    }else if (this.moves===9){
      return this.winMessage();
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
    //same issue as name, jumps this and then goes to players=2
    scope.players=1;
    scope.insertName(1);
  });
  twoPlayer.on('click',function(){
    scope.players=2;
    scope.insertName(2);
  });
  this.game.append(onePlayer);
  this.game.append(twoPlayer);
  $('#container').append(this.game)
}

//set name
Board.prototype.playerNames=function playerNames(){
  firstPlayer=$('<div>').addClass('player first');
  secondPlayer=$('<div>').addClass('player second');
  firstName=$('<h2>').attr('id','first-player');
  firstName.text('____________');
  firstScore=$('<h4>');
  firstScore.text('Wins: 0');
  secondName=$('<h2>').attr('id','second-player');;
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
      $('#first-player').text(input.val());
      input.val('')
      submit.on('click',function(){
        //doesn't show up
        //instead replaces first h2
        $('#second-player').text(input.val());
        scope.render();
      });
    });
  }
  centering.append(nameRequest);
  centering.append(input);
  centering.append(submit);
  this.game.append(centering);
  $('#container').append(this.game);
}

//changes the screen to announce who won
Board.prototype.winMessage= function winMessage(winner){
  this.xplays=true;
  this.oplays=false;

  $('.board-row').remove();//
  announcement=$('<h3>').addClass('winrar');
  //add an if for the tie eventuality
  if ((winner==='O')||(winner==='X')){
    announcement.text(winner+' wins!');
  }else{
    announcement.text('You tied!');
  }

  reset=$('<button>').addClass('winrar');
  reset.text('Play again?').attr('id','restart');
  scope=this
  reset.on('click',function(){
    //reset for board
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
Board.prototype.compAi=function compAi(){
  console.log(this.moves)
  var colIdx= Math.floor(Math.random()*3);
  var rowIdx= Math.floor(Math.random()*3);
  if (this.moves===9){
    return this.getWin();
  }
  if (this.board[colIdx][rowIdx] === " "){
    // console.log('here')
    this.board[colIdx][rowIdx]="O";
    $("div").find("[col='" + colIdx + "'][row='" + rowIdx + "']").text('O');
    this.getWin();
    // console.log(colIdx+','+rowIdx)
    // console.log(this)
    this.moves++
  }else{
    console.log('but then here')
    this.compAi();
  }
}

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
