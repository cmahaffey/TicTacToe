console.log('let\'s play');
//Test: make a tictactoe board as an array of arrays
var p1wins=0;
var p2wins=0;

function Board(){
  this.board=[];
  this.moves=0;
  this.xplays=true;
  this.oplays=false;
  this.onePlayer=false;
  this.twoPlayer=false;
  this.players;
  this.game=$('<div>').addClass('board');
  //variables for x vs o
  this.p1x=true;
  this.p1o=false;
  this.boardSize=3
}
// board setup
Board.prototype.render = function render(){
  $('.size').remove();
  $('.choice').remove();
  $('.winrar').remove();

  for (var i=0;i<this.boardSize;i++){
    this.board.push([]);
    for(var j=0;j<this.boardSize;j++){
      this.board[i].push('E');
    }
  }
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
      square.text(this.board[rows][squares]);
      square.css({color:'black'})

      //add classes for top, bottom, borders
      if (rows%this.board.length===0){
        square.addClass('top');

      }else if (rows%this.board.length===(this.board.length-1)){
        square.addClass('bottom');

      }else {
        square.addClass('center');

      }
      if (squares%this.board.length===0){
        square.addClass('left');

      }else if (squares%this.board.length===(this.board.length-1)){
        square.addClass('right');

      }else {
        square.addClass('middle');

      }
      row.append(square)
    }
    this.game.append(row)
  }
  var scope=this
  $('#container').append(this.game);
  if (this.p1o){
    setTimeout(function(){
      scope.compAi();
     },500);
  }
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
  if (this.board[index[0]][index[1]]==='E'){
  var scope=this;

    square.text('X');
    square.css({color:'chartreuse'});
    this.board[index[0]][index[1]]='X'
    this.moves++;

  // Flip through sides X and O
    if (this.players===2){
      this.xplays=false;
      this.oplays=true;
      this.getWin();}
    else{
      setTimeout(function(){
        scope.compAi()},500);
    }
  }
}
Board.prototype.player2Input=function player2Input(square, index){
  if (this.board[index[0]][index[1]]==='E'){
    var scope=this;

    square.text('O');
    square.css({color:'chartreuse'});
    this.board[index[0]][index[1]]='O'
    this.moves++;

  // Flip through sides X and O
    if (this.players===2){
      this.xplays=true;
      this.oplays=false;
      this.getWin();}
    else{
      setTimeout(function(){
        scope.compAi()},500);
    }
  }
}

// win for x and o
Board.prototype.xWins=function xWins(){
  var scope=this;
  if (this.p1x){
    p1wins++;
  }else if (this.p1o){
    p2wins++;
  }
  this.playerWins();
  setTimeout(function(){
    scope.winMessage('X');}, 300);
  return false;
}
Board.prototype.oWins=function oWins(){
  var scope=this;
  if (this.p1x){
    p2wins++;
  }else if (this.p1o){
    p1wins++
  }
  this.playerWins();
  setTimeout(function(){
    scope.winMessage('O');}, 300);
  return false;
}
//get win by column
Board.prototype.getWinCol= function getWinCol(){

  var xwin=0;
  var owin=0;
  for (var i=0;i<this.board.length;i++){
    for (var j=0;j<this.board.length;j++){
      if(this.board[i][j]==='X'){
        xwin++;
      }
      if(xwin===this.board.length){
        return this.xWins()
      }
      if(this.board[i][j]==='O'){
        owin++;
      }
      if(owin===this.board.length){
        return this.oWins()
      }
    }
    xwin=0;
    owin=0;
  }
  return true;
}
//get win by row
Board.prototype.getWinRow= function getWinRow(){

  var xwin=0;
  var owin=0;
  for (var i=0;i<this.board.length;i++){
    for (var j=0;j<this.board.length;j++){
      if(this.board[j][i]==='X'){
        xwin++;
      }
      if(xwin===this.board.length){
        return this.xWins()
      }
      if(this.board[j][i]==='O'){
        owin++;
      }
      if(owin===this.board.length){
        return this.oWins()
      }
    }
    xwin=0;
    owin=0;
  }
  return true;
}
// get right down diagonal wins
Board.prototype.getWinRDiag= function getWinRDiag(){
  var xwin=0;
  var owin=0;
  for (var i=0;i<this.board.length;i++){
      if(this.board[i][i]==='X'){
        xwin++;
      }
      if(xwin===this.board.length){
        return this.xWins()
      }
      if(this.board[i][i]==='O'){
        owin++;
      }
      if(owin===this.board.length){
        return this.oWins()
      }
  }
  xwin=0;
  owin=0;
  return true;
}

//get left down diagonal wins
Board.prototype.getWinLDiag= function getWinRLDiag(){
  var xwin=0;
  var owin=0;
  for (var i=0;i<this.board.length;i++){
      if(this.board[i][this.board.length-1-i]==='X'){
        xwin++;
      }
      if(xwin===this.board.length){
        return this.xWins()
      }
      if(this.board[i][this.board.length-1-i]==='O'){
        owin++;
      }
      if(owin===this.board.length){
        return this.oWins()
      }
  }
  xwin=0;
  owin=0;
  return true;
}

//get a win
Board.prototype.getWin = function getWin(){
  var scope=this
  if (this.moves<Math.pow(this.board.length,2)){
    this.getWinRow();
    this.getWinCol();
    this.getWinRDiag();
    this.getWinLDiag();
  }
  if (this.moves>=Math.pow(this.board.length,2)
  &&this.getWinRow()&&this.getWinCol()&&this.getWinRDiag()&&this.getWinLDiag()){
      return setTimeout(function(){
        scope.winMessage();}, 300);
  }
}

//choosing x or o
Board.prototype.teamChoice=function teamChoice(num){
  $('center').remove();
  $('.size').remove();
  $('.winrar').remove();
  var playX=$('<button>').addClass('X choice');
  var playO=$('<button>').addClass('O choice');
  playX.text(' X ');
  playO.text(' O ');
  var scope=this
  playX.on('click',function(){
    scope.p1x=true;
    scope.p1o=false;
    scope.render(num);
  });
  playO.on('click',function(){
    scope.p1o=true;
    scope.p1x=false;
    scope.render(num);
  });
  var prompter=$('<h2>').addClass('size pChoice')
  prompter.text('Would you like to play as X or as O?')
  this.game.append(prompter);
  this.game.append(playX);
  this.game.append(playO);
  $('#container').append(this.game)
}

//1 or 2 player
Board.prototype.numPlayers= function numPlayers(){
  var onePlayer=$('<button>').addClass('players');
  var twoPlayer=$('<button>').addClass('players');
  onePlayer.text('1 player');
  twoPlayer.text('2 player');
  var scope=this
  onePlayer.on('click',function(){
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

  secondName=$('<h2>').attr('id','second-player');;
  secondName.text('Computer');

  firstPlayer.append(firstName);
  secondPlayer.append(secondName);

  $('#container').append(firstPlayer);
  $('#container').append(secondPlayer);
}
Board.prototype.playerWins=function playerWins(){

  $('h4').remove();
  firstScore=$('<h4>');
  firstScore.text('Wins: '+p1wins);
  first=$('.first').append(firstScore);
  secondScore=$('<h4>');
  secondScore.text('Wins: '+p2wins);
  second=$('.second').append(secondScore);
  $('#container').append(first);
  $('#container').append(second);
}

//allows player to insert a name
Board.prototype.insertName=function insertName(){
  $('.players').remove();
  var inputs=[]
  var input=$('<input>').addClass('name');
  var submit=$('<button>').addClass('name');
  submit.text('submit');
  var nameRequest=$('<p>').addClass('name');
  var centering=$('<center>')
  nameRequest.text("Please put in the your name");
  var scope=this
  if (this.players===1){
    submit.on('click',function(){
      $('.first h2').text(input.val());
      scope.boardWidth();
    });
  }else if (this.players===2) {
    submit.on('click',function(){
      inputs.push(input.val());
      $('#first-player').text(inputs[0]);
      input.val('')
      submit.on('click',function(){
        $('#second-player').text(inputs[1]);
        scope.boardWidth();

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
  announcement=$('<h1>').addClass('winrar');
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
    scope.board=[]
    //reset box
    scope.moves=0;
    if (scope.players===2){
      scope.render();
    } else if (scope.players===1){
      scope.teamChoice();
    }
  });
  this.game.append(announcement);
  this.game.append(reset);
}

//comp ai
Board.prototype.compAi=function compAi(){
  if (this.boardSize>3){
    this.compAiBig();
  }else{
    if (this.p1x){
      compAiSmallO(this.board,this.moves);
      this.xplays=true;
      this.oplays=false;
    }else if(this.p1o){
      compAiSmallX(this.board,this.moves);
      this.xplays=false;
      this.oplays=true;
    }
    this.moves++
    this.getWin();
  }
}
//for boards >3
Board.prototype.compAiBig=function compAiBig(){

  var autoSquare;
  var colIdx= Math.floor(Math.random()*this.board.length);
  var rowIdx= Math.floor(Math.random()*this.board.length);
  if (this.moves===Math.pow(this.boardSize,2)){
    return this.getWin();
  }
  if (this.board[colIdx][rowIdx] === "E"){

    if (this.p1x){
      this.board[colIdx][rowIdx]="O";
      autoSquare=$("div").find("[col='" + colIdx + "'][row='" + rowIdx + "']")
      autoSquare.text('O');
      this.xplays=true;
      this.oplays=false;
    }else if (this.p1o){
      this.board[colIdx][rowIdx]="X";
      autoSquare=$("div").find("[col='" + colIdx + "'][row='" + rowIdx + "']")
      autoSquare.text('X');
      this.xplays=false;
      this.oplays=true;
    }
    autoSquare.css({color:'chartreuse'});
    this.moves++
    this.getWin();

  }else{
    this.compAiBig();
  }
}

//board size selection
Board.prototype.boardWidth=function boardWidth(){
  $('center').remove();
  var instructions=$('<h2>').addClass('size pChoice')
  instructions.text('What size board would you like to play on?')
  var prompter=$('<h2>').addClass('size pChoice')
  prompter.text('Or did you have another size in mind?')
  var threex3=$('<button>').addClass('size');
  var fourx4=$('<button>').addClass('size');
  var fivex5=$('<button>').addClass('size');
  var otherI=$('<input>').addClass('size pChoice')
  var otherB=$('<button>').addClass('size pChoice');
  threex3.text(' 3x3 ');
  fourx4.text(' 4x4 ');
  fivex5.text(' 5x5 ');
  otherB.text(' Create!')
  var scope=this;
  threex3.on('click',function(){
    if (scope.players===1){
      scope.teamChoice();
    }else if (scope.players===2){
      scope.render();
    }
  });
  fourx4.on('click',function(){
    if (scope.players===1){
      scope.boardSize=4;
      scope.teamChoice();
    }else if (scope.players===2){
      scope.boardSize=4;
      scope.render();
    }
  });
  fivex5.on('click',function(){
    if (scope.players===1){
      scope.boardSize=5;
      scope.teamChoice();
    }else if (scope.players===2){
      scope.boardSize=5;
      scope.render();
    }
  });
  otherB.on('click',function(){
    if (isNaN(otherI.val())){
    }else{
      if(otherI.val()==='1'){
      }else{
        scope.boardSize=otherI.val();
      }
    }
    if (scope.players===1){
      scope.teamChoice();
    }else if (scope.players===2){
      scope.render();
    }
  });
  center=$('<center>')
  center.append(otherI);
  center.append(otherB);
  this.game.append(instructions)
  this.game.append(threex3);
  this.game.append(fourx4);
  this.game.append(fivex5);
  this.game.append(prompter);
  this.game.append(center);
  $('#container').append(this.game)

}
//play function
play=function play(){
  var box = new Board()
  box.numPlayers();
  box.playerNames();
  box.playerWins();
}

//window onload, for testing for now
$(document).ready(function(){
  play();
});
