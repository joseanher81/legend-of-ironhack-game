class EnemyDevil extends Character{

  constructor(ctx, map, imgSrc, life, posX, posY, power, speed = 50, size = 40) {
	  super(ctx, map, imgSrc, life, posX, posY, speed, size);
	  this.moveDirection = this.randomDirection();
    this.moveDirectionCount = 0;
    this.power = power;
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

    // Check whether future position is valid
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
}