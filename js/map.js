class Map {

  constructor(ctx, mapName) {
    let jsonMap = Utils.loadJson(mapName);
    this.ctx = ctx;
    this.gameMap = jsonMap.gameMap;
    this.tileSize = jsonMap.tileSize;
    this.mapCols = jsonMap.mapCols;
    this.mapRows = jsonMap.mapRows;
    this.startX = jsonMap.startX;
    this.startY = jsonMap.startY;
    this.tileSheet = new Image();
    this.tileSheet.src = jsonMap.tileSheetSrc;
    this.tileTypes = jsonMap.tileTypes;
    this.enemies = jsonMap.enemies;
    this.heroe = jsonMap.heroe;
    this.items = this.loadItems(jsonMap.items);            
  }

  getTile(col, row) {
    return this.gameMap[row * this.mapCols + col];
  }

  getTileAtPositionXY(x, y) {  
    let col = Math.floor(x / this.tileSize);
    let row = Math.floor(y / this.tileSize);   

    // Correct impossible rows and columns
    if(row < 0) row = 0;
    if(row == this.mapRows) row = this.mapRows-1;
    if(col < 0) col = 0;
    if(col == this.mapCols) col = this.mapCols-1;
    
    return this.getTile(col, row);
  }

  loadItems(items) {
    return items.map(item => {
      return new Item(item.posX, item.posY, Item.itemTypes[item.name]);
    });
  }

  draw() {
    // Draw map
    for(let col = 0; col < this.mapCols; col++) {
      for(let row = 0; row < this.mapRows; row++) {
        let tile = this.tileTypes[this.getTile(col, row)];
        this.ctx.drawImage(this.tileSheet, tile.sprite.x, tile.sprite.y, tile.sprite.w, tile.sprite.h, col * this.tileSize, row * this.tileSize + this.startY, this.tileSize, this.tileSize);
      }
    }

    // Draw items on map
    this.items.forEach(item => item.draw(this.ctx));
  }
  
}