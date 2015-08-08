// for (var i=0;i<this.board.length;i++){
//   //
//   // if((this.board[i][0]==='X')&&(this.board[i][1]==='X')&&(this.board[i][2]==='X')){
//   //   if (this.p1x){
//   //     console.log('p1x')
//   //     p1wins++;
//   //   }else if (this.p1o){
//   //     p2wins++;
//   //   }
//   //   this.playerWins();
//   //   return setTimeout(function(){
//   //     scope.winMessage('X');}, 300);
//   // }else if ((this.board[0][i]==='X')&&(this.board[1][i]==='X')&&(this.board[2][i]==='X')) {
//   //   if (this.p1x){
//   //     console.log('p1x')
//   //     p1wins++;
//   //   }else if (this.p1o){
//   //     p2wins++
//   //   }
//   //   this.playerWins();
//   //   return setTimeout(function(){
//   //     scope.winMessage('X');}, 300);
//   // }else
//    if ((this.board[0][0]==='X')&&(this.board[1][1]==='X')&&(this.board[2][2]==='X')) {
//     if (this.p1x){
//       console.log('p1x')
//       p1wins++;
//     }else if (this.p1o){
//       p2wins++
//     }
//     this.playerWins();
//     return setTimeout(function(){
//       scope.winMessage('X');}, 300);
//   }else if ((this.board[0][2]==='X')&&(this.board[1][1]==='X')&&(this.board[2][0]==='X')) {
//     if (this.p1x){
//       console.log('p1x')
//       p1wins++;
//     }else if (this.p1o){
//       p2wins++
//     }
//     this.playerWins();
//     return setTimeout(function(){
// scope.winMessage('X');}, 300);
//   }else if((this.board[i][0]==='O')&&(this.board[i][1]==='O')&&(this.board[i][2]==='O')){
//     else if ((this.board[0][i]==='O')&&(this.board[1][i]==='O')&&(this.board[2][i]==='O')) {
//     if (this.p1x){
//       p2wins++;
//     }else if (this.p1o){
//       p1wins++
//     }
//     this.playerWins();
//     return setTimeout(function(){
// scope.winMessage('O');}, 300);
//   }else if ((this.board[0][0]==='O')&&(this.board[1][1]==='O')&&(this.board[2][2]==='O')) {
//     if (this.p1x){
//       p2wins++;
//     }else if (this.p1o){
//       p1wins++;
//     }
//     this.playerWins();
//     return setTimeout(function(){
// scope.winMessage('O');}, 300);
//   }else if ((this.board[0][2]==='O')&&(this.board[1][1]==='O')&&(this.board[2][0]==='O')) {
//     if (this.p1x){
//       p2wins++;
//     }else if (this.p1o){
//       p1wins++;
//     }
//     this.playerWins();
//     return setTimeout(function(){
// scope.winMessage('O');}, 300);
getWin=function(box){
    var xwinrow=0;
    var owinrow=0;
    var xwincol=0;
    var owincol=0;
    var xwindiag1=0;
    var owindiag1=0;
    var xwindiag2=0;
    var owindiag2=0;
    var xwins=false;
    var owins=false;
    var tie=true;
    for (var i=0;i<box.length;i++){
        for (var j=0;j<box.length;j++){
          console.log(i+','+i)
          if (box[i][j].toString()==='x'){
            xwinrow++;
          }else if(box[j][i].toString()==='x'){

            xwincol++;
          }else if((box[j][j].toString()==='x')){

                xwindiag1++;
                console.log('it\'s an x diag1');
          }else if ((box[j][box.length-1-j].toString()==='x')) {
            xwindiag2++;
            console.log(box.length-1-j)
            console.log(j)
            console.log('it\'s an x diag2');
          }
          if (box[i][j].toString()==='o'){
            owinrow++;
          }else if(box[j][i].toString()==='o'){

            owincol++;
          }else if((box[i][i].toString()==='o')){

                owindiag1++;
                console.log('it\'s an o diag1');
          }else if ((box[i][box.length-1-i].toString()==='o')) {
            owindiag2++;
            console.log('it\'s an o diag2');
          }

            // if ((box[i][j].toString()==='x')||(box[j][i].toString()==='x')||
            // (box[j][j].toString()==='x')||(box[j][box.length-1-j].toString()==='x')){
            //       xwinrow++;
            //       xwincol++;
            //       xwindiag++;
            //       console.log('it\'s an x');
            // }else if ((box[i][j].toString()==='o')||(box[j][i].toString()==='o')
            // ||(box[j][j].toString()==='o')||(box[j][box.length-1-j].toString()==='o')){
            //       console.log('it\'s an o');
            //       owinrow++;
            //       owincol++;
            //       owindiag++;
            // }
          }
          if ((xwinrow===box.length)||(xwincol===box.length)||(xwindiag1===(box.length*3))||(xwindiag2===(box.length*3))){
              xwins=true
          }
          if ((owinrow===box.length)||(owincol===box.length)||(owindiag1===(box.length*3))||(owindiag2===(box.length*3))){
              owins=true
          }


     }

// if (xwins){
//   console.log('x wins')
// }else if (owins){
//   console.log('o wins')
// }else{
//   console.log('it\'s a tie')
// }
//
// }
<!-- <div class="player first">
  <h2>____________</h2>
  <h4>Wins: 0</h4>
</div>
<div class="player second">
  <h2>Computer</h2>
  <h4>Wins: 0</h4>
</div> -->
<!-- <div class="game">
  <div class='board-row'>
    <div class="square top left">
        test
    </div>
    <div class="square top middle">
        test
    </div>
    <div class="square top right">
        test
    </div>
  </div>
  <div class="board-row">
    <div class="square center left">
        test
    </div>
    <div class="square center middle">
        test
    </div>
    <div class="square center right">
        test
    </div>
  </div>
  <div class="board-row">
    <div class="square bottom left">
        test
    </div>
    <div class="square bottom middle">
        test
    </div>
    <div class="square bottom right">
        test
    </div>
    <button type="button" name="button" id='restart'>Replay?</button>
  </div> -->
