console.log('let\'s play');
//set up a board
function Board(size){
  this.box=[];
  for (var i=0;i<size;i++){
    this.box.push([]);
    for(var j=0;j<size;j++){
      this.box[i].push([]);
    }
  }
  return this.box;
}
//get an input

//get a win

//play

//choosing x or o

//1 or 2 player

//set name

//comp ai

//big boards
