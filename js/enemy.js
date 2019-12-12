class Enemy {

  constructor(ctx, imgSrc, map, posX = 500, posY = 500, speed = 50, size = 40) {
    this.ctx = ctx;
    this.map = map;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.size = size;
    this.character = new Image();
    this.character.src = imgSrc;
    this.spriteX = 0;
    this.spriteY = 0;
    this.spriteRefresh = 0;
	  this.moveDirection = this.randomDirection();
	  this.moveDirectionCount = 0;
  }

  update(delta) {

	  // The enemy moves at leat 2 seconds to the same direction
    this.moveDirectionCount += delta;
    if(this.moveDirectionCount > 2) {
      this.moveDirection = this.randomDirection();
      this.moveDirectionCount = 0;
    }

    let futureX = this.posX;
    let futureY = this.posY;
    switch(this.moveDirection) {
      case "left":
        futureX  -= this.speed * delta;
        this.spriteY = 1; // Look to the left
        break;
      case "right":
        futureX  += this.speed * delta;
        this.spriteY = 2;  // Look to the right
        break;
      case "down":
        futureY += this.speed * delta;
        this.spriteY = 0;  // Look down
        break;
      case "up":
        futureY -= this.speed * delta;
        this.spriteY = 3;  // Look up
        break;      
    }

   // console.log("FutureX " + futureX + " FutureY " + futureY );
    // Check whether future position is valid
   // console.log("Collision: " + this.collision(futureX, futureY));
    if(!this.collision(futureX, futureY)) {
      this.posX = futureX;
      this.posY = futureY;
    }

    // Sprite animation (with reset)  TODO probably I can do this better
    this.spriteRefresh++;
    if(this.spriteRefresh == 5) {
      this.spriteRefresh = 0;
      this.spriteX++;
      if(this.spriteX > 2) this.spriteX = 0;
    }

    //if(movement == "") this.spriteX = 0; // Idle state

  }

  randomDirection() {
    let rand = Math.floor(Math.random() * 4) + 1;  // Only 4 possible directions
    let direction;
    
    switch(rand) {
        case 1:
      direction = "left";
          break;
    case 2:
      direction = "right";
          break;   
    case 3:
      direction = "up";
          break;
    case 4:
      direction = "down";
          break;
      }
    
    return direction;
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
    
    // console.log(`TL=${tileAtTopLeft} TR=${tileAtTopRight} BL=${tileAtBottomLeft} BR=${tileAtBottomRight}`);
    // console.log("walkable TL ", this.map.tileTypes[tileAtTopLeft].walkable );
    // console.log("walkable TR ", this.map.tileTypes[tileAtTopRight].walkable );
    // console.log("walkable BL ", this.map.tileTypes[tileAtBottomLeft].walkable );
    // console.log("walkable BR ", this.map.tileTypes[tileAtBottomRight].walkable );

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
    //console.log("Draws enemy");
    this.ctx.drawImage(this.character, this.spriteX * this.size, this.spriteY * this.size, 40, 40, this.posX, this.posY, this.size, this.size);
  }
}