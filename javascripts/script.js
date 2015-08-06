console.log('let\'s play');
//Test: make a tictactoe board as an array of arrays

function Board(size){
  this.board=[];
  for (var i=0;i<size;i++){
    this.board.push([]);
    for(var j=0;j<size;j++){
      this.board[i].push('R');
    }
  }
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
      square.text(this.board[rows][squares]);
      //add classes for top, bottom, borders
      if (rows%3===0){
        square.addClass('top');
        this.playerInput()
      }else if (rows%3===1){
        square.addClass('center');
        this.playerInput()
      }else if (rows%3===2){
        square.addClass('bottom');
        this.playerInput()
      }
      if (squares%3===0){
        square.addClass('left');
        this.playerInput()
      }else if (squares%3===1){
        square.addClass('middle');
        this.playerInput()
      }else if (squares%3===2){
        square.addClass('right');
        this.playerInput()
      }
      row.append(square)
    }
    game.append(row)
  }
  $('#container').append(game)

}

//Test: get an input-needs board set up
Board.prototype.playerInput=function playerInput(){
  var scope=this;
  console.log (this)
  $('body').on('click','.square',function(){
    scope.text('X');
  });
}


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
    }else{
      console.log('it\'s a tie')
    }
  }
}

// getWin=function(box){
//     var xwinrow=0;
//     var owinrow=0;
//     var xwincol=0;
//     var owincol=0;
//     var xwindiag1=0;
//     var owindiag1=0;
//     var xwindiag2=0;
//     var owindiag2=0;
//     var xwins=false;
//     var owins=false;
//     var tie=true;
//     for (var i=0;i<box.length;i++){
//         for (var j=0;j<box.length;j++){
//           console.log(i+','+i)
//           if (box[i][j].toString()==='x'){
//             xwinrow++;
//           }else if(box[j][i].toString()==='x'){
//
//             xwincol++;
//           }else if((box[j][j].toString()==='x')){
//
//                 xwindiag1++;
//                 console.log('it\'s an x diag1');
//           }else if ((box[j][box.length-1-j].toString()==='x')) {
//             xwindiag2++;
//             console.log(box.length-1-j)
//             console.log(j)
//             console.log('it\'s an x diag2');
//           }
//           if (box[i][j].toString()==='o'){
//             owinrow++;
//           }else if(box[j][i].toString()==='o'){
//
//             owincol++;
//           }else if((box[i][i].toString()==='o')){
//
//                 owindiag1++;
//                 console.log('it\'s an o diag1');
//           }else if ((box[i][box.length-1-i].toString()==='o')) {
//             owindiag2++;
//             console.log('it\'s an o diag2');
//           }
//
//             // if ((box[i][j].toString()==='x')||(box[j][i].toString()==='x')||
//             // (box[j][j].toString()==='x')||(box[j][box.length-1-j].toString()==='x')){
//             //       xwinrow++;
//             //       xwincol++;
//             //       xwindiag++;
//             //       console.log('it\'s an x');
//             // }else if ((box[i][j].toString()==='o')||(box[j][i].toString()==='o')
//             // ||(box[j][j].toString()==='o')||(box[j][box.length-1-j].toString()==='o')){
//             //       console.log('it\'s an o');
//             //       owinrow++;
//             //       owincol++;
//             //       owindiag++;
//             // }
//           }
//           if ((xwinrow===box.length)||(xwincol===box.length)||(xwindiag1===(box.length*3))||(xwindiag2===(box.length*3))){
//               xwins=true
//           }
//           if ((owinrow===box.length)||(owincol===box.length)||(owindiag1===(box.length*3))||(owindiag2===(box.length*3))){
//               owins=true
//           }
//
//
//      }
// if (xwins){
//   console.log('x wins')
// }else if (owins){
//   console.log('o wins')
// }else{
//   console.log('it\'s a tie')
// }
//
// }
//



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
