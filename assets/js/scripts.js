new Vue({
  el: '#app',
  data: {
    isPlayerOneTurn: true,
    gameHasEnded: false,
    gameIsTied: false,
    tiles: [
      {name:"tTL",x:0,   y:0,  w:120,h:120, content: ""},
      {name:"tTM",x:120, y:0,  w:120,h:120, content: ""},
      {name:"tTR",x:240, y:0,  w:120,h:120, content: ""},
      {name:"tML",x:0,   y:120,w:120,h:120, content: ""},
      {name:"tMM",x:120, y:120,w:120,h:120, content: ""},
      {name:"tMR",x:240, y:120,w:120,h:120, content: ""},
      {name:"tBL",x:0,   y:240,w:120,h:120, content: ""},
      {name:"tBM",x:120, y:240,w:120,h:120, content: ""},
      {name:"tBR",x:240, y:240,w:120,h:120, content: ""}
    ],
    possibleWins: [
      [0,1,2], //Top Row
      [0,4,8], //Back Slash
      [0,3,6], //1st Column
      [1,4,7], //2nd Column
      [2,4,6], //Forward Slash
      [2,5,8], //3rd Column
      [3,4,5], //Mid Row
      [6,7,8]  //Bot Row
    ]
  },
  methods: {
    createTile: function(tile){
      var x = tile.x + 12;
      var y = tile.y + 12;
      return "<img id='"+tile.name+"' class='tile' src='assets/resources/Null.png' width='100px' height='100px' style='top: "+y+"px; left: "+x+"px;'>"
    },
    clickedOnTile: function(event){
      if (this.gameHasEnded) {
        return false;
      }
      var x = event.clientX;
      var y = event.clientY;
      var c = this.isPlayerOneTurn ? "X" : "O";
      var flag_change = false;
      this.tiles.forEach(function(tile){
        if (tile.content == "" && x >= tile.x && x <= tile.x + 120 && y >= tile.y && y <= tile.y + 120) {
          document.getElementById(tile.name).src = 'assets/resources/' + c + '.png';
          tile.content = c;
          flag_change = true;
        }
      });
      if (this.checkForWin()) {
        this.endGame();
      } else if (flag_change) {
        this.isPlayerOneTurn = !this.isPlayerOneTurn;
      }
    },
    checkForWin: function(){
      var tileA, tileB, tileC;
      for (i = 0; i < 8; i++) {
        tileA = this.tiles[this.possibleWins[i][0]].content;
        tileB = this.tiles[this.possibleWins[i][1]].content;
        tileC = this.tiles[this.possibleWins[i][2]].content;
        if (tileA != '' && tileA == tileB && tileB == tileC) {
          return true;
        }
      }
      if (this.tiles[0].content != ''
        &&this.tiles[1].content != ''
        &&this.tiles[2].content != ''
        &&this.tiles[3].content != ''
        &&this.tiles[4].content != ''
        &&this.tiles[5].content != ''
        &&this.tiles[6].content != ''
        &&this.tiles[7].content != ''
        &&this.tiles[8].content != '') {
        this.gameIsTied = true;
        return true;  
      }
      return false;
    },
    endGame: function(){
      this.gameHasEnded = true;
      var congrats;
      if(this.gameIsTied) {
        congrats = "It's a draw..."
      } else {
        congrats = this.isPlayerOneTurn ? "Player X Wins!" : "Player O Wins!";
      }
      document.getElementById("praiseText").innerHTML = congrats;
    },
    resetGame: function(){
      document.getElementById("praiseText").innerHTML = '';
      this.tiles.forEach(function(tile){
        document.getElementById(tile.name).src = 'assets/resources/Null.png';
        tile.content = "";
      });
      this.isPlayerOneTurn = true;
      this.gameIsTied = false;
      this.gameHasEnded = false;
    }
  }
});
