class Map {

  constructor(ctx, tileSize = 40, mapCols = 23, mapRows = 12, startX = 0, startY = 120) {
    this.ctx = ctx;
    this.gameMap = [ 
     11, 11, 11, 11, 13, 11, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
     11,  9,  9,  9, 13, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
      9,  9,  9,  9, 13,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9, 10,  9,  9,
      9,  9,  9,  9, 13,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 10, 10,  9,  9,
      9,  9, 11,  9, 21,  9,  9,  9,  9,  9,  6,  7,  8,  9,  9,  9,  9,  9,  9,  9, 10,  9,  9,
      9,  9,  9,  9,  9,  2,  3,  3,  3,  4, 14, 43, 16,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,
      9,  9,  9,  9,  9,  9, 11,  9,  9,  9, 22, 23, 24,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,
      9, 10,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9,
      9,  9, 10,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 11,  9,  9, 30, 31, 32,  9,  9,
      9,  9,  9,  9, 11,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 38, 39, 40,  9,  9,
      9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 46, 47, 48,  9,  9,
      9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9
   ];
    this.tileSize = tileSize;
    this.mapCols = mapCols;
    this.mapRows = mapRows;
    this.startX = startX;
    this.startY = startY;
    this.tileSheet = new Image();
    this.tileSheet.src = "./img/tileset3.png";
    this.tileTypes = {
      1 : { walkable: true, sprite:{x:0,y:0,w:40,h:40}},  // Round dirt in grass
      2 : { walkable: true,	sprite:{x:40,y:0,w:40,h:40}}, // Left border horizontal dirt road
      3 : { walkable: false,	sprite:{x:80,y:0,w:40,h:40}},  // Middle horizontal dirt road
      4 : { walkable: false,	sprite:{x:120,y:0,w:40,h:40}},  // Right border horizontal dirt road
      5 : { walkable: false,	sprite:{x:160,y:0,w:40,h:40}},   // Top border vertical dirt road
      6 : { walkable: false,	sprite:{x:200,y:0,w:40,h:40}},   // Left top corner dirt rectangle
      7 : { walkable: false,	sprite:{x:240,y:0,w:40,h:40}},   // Top border dirt rectangle
      8 : { walkable: false,	sprite:{x:280,y:0,w:40,h:40}},   // Right top corner dirt rectangle
      9 : { walkable: false,	sprite:{x:0,y:40,w:40,h:40}},   // Left top corner grass rectangle
      10 : { walkable: false,	sprite:{x:40,y:40,w:40,h:40}},   // Top border grass rectangle
      11 : { walkable: false,	sprite:{x:80,y:40,w:40,h:40}},   // Right top corner grass rectangle
      12 : { walkable: false,	sprite:{x:120,y:40,w:40,h:40}},   // Trees on grass
      13 : { walkable: false,	sprite:{x:160,y:40,w:40,h:40}},   // Middle vertical dirt road
      14 : { walkable: false,	sprite:{x:200,y:40,w:40,h:40}},   // Left border dirt rectangle
      15 : { walkable: false,	sprite:{x:240,y:40,w:40,h:40}},   // Center dirt rectangle
      16 : { walkable: false,	sprite:{x:280,y:40,w:40,h:40}},   // Right border dirt rectangle
      17 : { walkable: false,	sprite:{x:0,y:80,w:40,h:40}},
      18 : { walkable: false,	sprite:{x:40,y:80,w:40,h:40}},
      19 : { walkable: false,	sprite:{x:80,y:80,w:40,h:40}},
      20 : { walkable: false,	sprite:{x:120,y:80,w:40,h:40}},
      21 : { walkable: false,	sprite:{x:160,y:80,w:40,h:40}},
      22 : { walkable: false,	sprite:{x:200,y:80,w:40,h:40}},
      23 : { walkable: false,	sprite:{x:240,y:80,w:40,h:40}},
      24 : { walkable: false,	sprite:{x:280,y:80,w:40,h:40}},
      25 : { walkable: false,	sprite:{x:0,y:120,w:40,h:40}},
      26 : { walkable: false,	sprite:{x:40,y:120,w:40,h:40}},
      27 : { walkable: false,	sprite:{x:80,y:120,w:40,h:40}},
      28 : { walkable: false,	sprite:{x:120,y:120,w:40,h:40}},
      29 : { walkable: false,	sprite:{x:160,y:120,w:40,h:40}},
      30 : { walkable: false,	sprite:{x:200,y:120,w:40,h:40}},
      31 : { walkable: false,	sprite:{x:240,y:120,w:40,h:40}},
      32 : { walkable: false,	sprite:{x:280,y:120,w:40,h:40}},
      33 : { walkable: false,	sprite:{x:0,y:160,w:40,h:40}},
      34 : { walkable: false,	sprite:{x:40,y:160,w:40,h:40}},
      35 : { walkable: false,	sprite:{x:80,y:160,w:40,h:40}},
      36 : { walkable: false,	sprite:{x:120,y:160,w:40,h:40}},
      37 : { walkable: false,	sprite:{x:160,y:160,w:40,h:40}},
      38 : { walkable: false,	sprite:{x:200,y:160,w:40,h:40}},
      39 : { walkable: false,	sprite:{x:240,y:160,w:40,h:40}},
      40 : { walkable: false,	sprite:{x:280,y:160,w:40,h:40}},
      41 : { walkable: false,	sprite:{x:0,y:200,w:40,h:40}},
      42 : { walkable: false,	sprite:{x:40,y:200,w:40,h:40}},
      43 : { walkable: false,	sprite:{x:80,y:200,w:40,h:40}},
      44 : { walkable: false,	sprite:{x:120,y:200,w:40,h:40}},
      45 : { walkable: false,	sprite:{x:160,y:200,w:40,h:40}},
      46 : { walkable: false,	sprite:{x:200,y:200,w:40,h:40}},
      47 : { walkable: false,	sprite:{x:240,y:200,w:40,h:40}},
      48 : { walkable: false,	sprite:{x:280,y:200,w:40,h:40}},   
    };
  }

  draw() {
    // Needed to be sure the tileSheet is already loaded before trying to draw it
    this.tileSheet.onload = function() {
      this.drawMap();
    }.bind(this);
  }

  drawMap() {
    for(let col = 0; col < this.mapCols; col++) {
      for(let row = 0; row < this.mapRows; row++) {
        let tile = this.tileTypes[this.getTile(col, row)];
        this.ctx.drawImage(this.tileSheet, tile.sprite.x, tile.sprite.y, tile.sprite.w, tile.sprite.h, col * this.tileSize, row * this.tileSize + this.startY, this.tileSize, this.tileSize);
      }
    }
  }

  getTile(col, row) {
    return this.gameMap[row * this.mapCols + col];
  }
}