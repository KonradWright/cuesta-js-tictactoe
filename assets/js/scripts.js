new Vue({
  el: '#app',
  data: {
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
    ]
  },
  methods: {
    createTile: function(tile){
      return "<img id='"+tile.name+"' class='tile' src='assets/resources/X.png' width='120px' height='120px' style='top: "+tile.y+"px; left: "+tile.x+"px;'>"
    },
    clickedOnTile: function(event){
      alert("HI");
    },
  }
});
