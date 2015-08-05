console.log('let\'s play');
//Test: make a tictactoe board as an array of arrays

function Board(size){
  this.box=[];
  for (var i=0;i<size;i++){
    this.box.push([]);
    for(var j=0;j<size;j++){
      this.box[i].push([' ']);
    }
  }
  return this.box;
}
//Test: get an input-needs board set up

//get a win

getWin=function(box){
    var xwinrow=0;
    var owinrow=0;
    var xwincol=0;
    var owincol=0;
    var xwindiag=0;
    var owindiag=0;
    var xwins=false;
    var owins=false;
    var tie=true;
    for (var i=0;i<box.length;i++){
        for (var j=0;j<box.length;j++){
            if ((box[i][j].toString()==='x')||(box[j][i].toString()==='x')||
            (box[j][j].toString()==='x')||(box[j][box.length-1-j].toString()==='x')){
                  xwinrow++;
                  xwincol++;
                  xwindiag++;
                  console.log('it\'s an x');
            }else if ((box[i][j].toString()==='o')||(box[j][i].toString()==='o')
            ||(box[j][j].toString()==='o')||(box[j][box.length-1-j].toString()==='o')){
                  console.log('it\'s an o');
                  owinrow++;
                  owincol++;
                  owindiag++;
            }
          }
          if ((xwinrow===box.length)||(xwincol===box.length)||(xwindiag===box.length)){
              xwins=true
          }
          if ((owinrow===box.length)||(owincol===box.length)||(owindiag===box.length)){
              owins=true
          }
          xwinrow=0;
          owinrow=0;
          xwincol=0;
          owincol=0;
          xwindiag=0;
          owindiag=0;
     }
if (xwins){
  console.log('x wins')
}else if (owins){
  console.log('o wins')
}else{
  console.log('it\'s a tie')
}

}

box=[[[' '],[' '],[' ']],[[' '],[' '],[' ']],[['o'],['o'],['o']]];
getWin(box);


//play

//choosing x or o

//1 or 2 player

//set name

//comp ai

//big boards
