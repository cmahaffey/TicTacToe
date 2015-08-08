console.log('let\'s play');
//Test: make a tictactoe board as an array of arrays
var p1wins=0;
var p2wins=0;

function Board(size){
  this.board=[];
  for (var i=0;i<size;i++){
    this.board.push([]);
    for(var j=0;j<size;j++){
      this.board[i].push('E');
    }
  }
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
}
//ToDo: board setup
Board.prototype.render = function render(){
  $('center').remove();
  $('.choice').remove();
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
  // square.on('click',function(){
    square.text('X');
    square.css({color:'chartreuse'});
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
      setTimeout(function(){
        scope.compAi()},500);
      //this.compAi();
      // aiFunction();
    }

  }
}
Board.prototype.player2Input=function player2Input(square, index){
  if (this.board[index[0]][index[1]]==='E'){
  var scope=this;
  // console.log(index);
  // square.on('click',function(){
    square.text('O');
    square.css({color:'chartreuse'});
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
      setTimeout(function(){
        scope.compAi()},500);
      //this.compAi();
      //this.compAi();
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
  if (this.moves<9){
    this.getWinRow();
    this.getWinCol();
    this.getWinRDiag();
    this.getWinLDiag();
  }
  if (this.moves===9&&this.getWinRow()&&this.getWinCol()&&this.getWinRDiag()&&this.getWinLDiag()){
      return setTimeout(function(){
        scope.winMessage();}, 300);
  }
  // }
}

//play

//choosing x or o
Board.prototype.teamChoice=function teamChoice(){
  $('center').remove();
  $('.winrar').remove();
  var playX=$('<button>').addClass('X choice');
  var playO=$('<button>').addClass('O choice');
  playX.text(' X ');
  playO.text(' O ');
  var scope=this
  playX.on('click',function(){
    scope.p1x=true;
    scope.p1o=false;
    scope.render();
  });
  playO.on('click',function(){
    scope.p1o=true;
    scope.p1x=false;
    scope.render();
  });
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
  // firstScore=$('<h4>');
  // firstScore.text('Wins: '+p1wins);
  secondName=$('<h2>').attr('id','second-player');;
  secondName.text('Computer');
  // secondScore=$('<h4>');
  // secondScore.text('Wins: '+p2wins);
  firstPlayer.append(firstName);
  // firstPlayer.append(firstScore);
  secondPlayer.append(secondName);
  // secondPlayer.append(secondScore);
  $('#container').append(firstPlayer);
  $('#container').append(secondPlayer);
}
Board.prototype.playerWins=function playerWins(){
  console.log(p1wins)
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
Board.prototype.insertName=function insertName(num){
  $('.players').remove();
  var inputs=[]
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
      scope.teamChoice();
    });
  }else if (num===2) {
    submit.on('click',function(){
      inputs.push(input.val());
      $('#first-player').text(inputs[0]);
      input.val('')
      // console.log($('#first-player'))
      submit.on('click',function(){
        //doesn't show up
        //instead replaces first h2
        // console.log($('#second-player'))
        $('#second-player').text(inputs[1]);
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
        scope.board[i][j]='E';
      }
    }
    //reset box
    scope.moves=0;
    if (scope.players===2){
      scope.render();
    } else if (scope.players===1){
      console.log('as;flkj')
      scope.teamChoice();
    }
  });
  //adds twice for some reason
  this.game.append(announcement);
  this.game.append(reset);
  //$('#container').append(this.game);
}

//comp ai
Board.prototype.compAi=function compAi(){
  // console.log(this.moves)
  var autoSquare;
  var colIdx= Math.floor(Math.random()*3);
  var rowIdx= Math.floor(Math.random()*3);
  if (this.moves===9){
    return this.getWin();
  }
  if (this.board[colIdx][rowIdx] === "E"){
    // console.log('here')
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
    // console.log(colIdx+','+rowIdx)
    // console.log(this)
    this.moves++
    this.getWin();
    console.log(this.moves)
  }else{
    // console.log('but then here')
    this.compAi();
  }
}

//big boards

//window onload, for testing for now
$(document).ready(function(){
  var box = new Board(3)
  box.numPlayers();
  box.playerNames();
  box.playerWins();

  //box.playerInput()
  //box={board:[['R','R','R'],['R','R','R'],['R','R','R']]}
  // getWin(box);
});
