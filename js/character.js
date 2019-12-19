class Character {
	
	constructor(ctx, map, imgSrc, life, posX, posY, speed, size = 40) {
		this.ctx = ctx;
		this.map = map;
		this.life = life;
		this.posX = posX;
		this.posY = posY;
		this.speed = speed;
		this.size = size;	
		this.character = new Image();
		this.character.src = imgSrc;		
		this.spriteX = 0;
		this.spriteY = 0;
		this.spriteRefresh = 0;
	}
	
	collision(x, y) {
		// fine tuning coordinates for better collisions and "y" taking into account score/inventory bar
		let tuning = 2; // pixels
		y -= this.map.startY;

		// Future tiles at every vertex
		let tileAtTopLeft = this.map.getTileAtPositionXY(x + tuning, y + tuning);
		let tileAtTopRight = this.map.getTileAtPositionXY(x + this.map.tileSize - tuning, y + tuning);
		let tileAtBottomLeft = this.map.getTileAtPositionXY(x + tuning, y + this.map.tileSize - tuning);
		let tileAtBottomRight = this.map.getTileAtPositionXY(x - tuning + this.map.tileSize, y + this.map.tileSize - tuning);

		let colliding = false;

		// Check tile walkability
		if(!this.map.tileTypes[tileAtTopLeft].walkable || !this.map.tileTypes[tileAtTopRight].walkable || !this.map.tileTypes[tileAtBottomLeft].walkable || !this.map.tileTypes[tileAtBottomRight].walkable) {
		  colliding = true;
		}

		// Check collision with bounds
		if((x < 0) || (x > (this.map.mapCols - 1) * this.map.tileSize) || (y < 0)|| (y > (this.map.mapRows - 1) * this.map.tileSize)) {
		  colliding = true;
		}

		return colliding;
	}
	
	draw() {
		this.ctx.drawImage(this.character, this.spriteX * this.size, this.spriteY * this.size, this.size, this.size, this.posX, this.posY, this.size, this.size);
	}
}