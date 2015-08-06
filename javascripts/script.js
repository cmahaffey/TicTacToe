console.log('let\'s play');
//Test: make a tictactoe board as an array of arrays

function Board(size){
  this.box=[];
  for (var i=0;i<size;i++){
    this.box.push([]);
    for(var j=0;j<size;j++){
      this.box[i].push(' ');
    }
  }
  return this.box;
}
//ToDo: board setup
function render(board){
  //<div class="game">
  var game=$('<div>').addClass('board');
  var row;
  var square;
  for (var rows=0;rows</*this.*/board.length;rows++){
    row=$('<div>').addClass('board-row');
    for (var squares=0;squares</*this.*/board.length;squares++){
      square=$('<div>').addClass('square');
      square.text(board[rows][squares]);
      row.append(square)
    }
    game.append(row)
  }
  $('body').append(game)
    // <div class='board-row'>
    //   <div class="square top left">
    //       test
    //   </div>
    //   <div class="square top middle">
    //       test
    //   </div>
    //   <div class="square top right">
    //       test
    //   </div>
    // </div>
    // <div class="board-row">
    //   <div class="square center left">
    //       test
    //   </div>
    //   <div class="square center middle">
    //       test
    //   </div>
    //   <div class="square center right">
    //       test
    //   </div>
    // </div>
    // <div class="board-row">
    //   <div class="square bottom left">
    //       test
    //   </div>
    //   <div class="square bottom middle">
    //       test
    //   </div>
    //   <div class="square bottom right">
    //       test
    //   </div>
    //   <button type="button" name="button" id='restart'>Replay?</button>
    // </div>

}

//Test: get an input-needs board set up

//get a win
Board.prototype.getWin=function(){
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
 box=[['O',' ','X'],[' ','O','X'],['X',' ','O']];
 // getWin(box);


//play

//choosing x or o

//1 or 2 player

//set name

//comp ai

//big boards
