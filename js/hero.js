class Hero {

  constructor(ctx, imgSrc, map, life, power, posX = 200, posY = 200, speed = 100, size = 40) {
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
    this.life = life;
    this.power = power;
    this.inmunity = 0; // in seconds
    this.weapons = [];
  }

  update(movement, delta, enemies) {
    let futureX = this.posX;
    let futureY = this.posY;
    switch(movement) {
      case "left":
        futureX -= this.speed * delta;
        this.spriteY = 1; // Look to the left
        break;
      case "right":
        futureX += this.speed * delta;
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
      case "space": 
        console.log("space pressed");
        // Create new fire ball
        this.weapons.push(new Weapon(this.ctx, "./img/fireWeapon.png", this.map, 1, this.posX, this.posY, this.spriteY));
        break;
    }

    // Update weapons
    this.weapons.forEach((weapon, i, array) => {
      weapon.update(delta);
      if(weapon.duration < 0) {
        array.splice(i,1);
        console.log("delete");
      } 
    });

    // Check whether there is collision with enemies (uses the current position)
    this.collisionWithEnemies(enemies, delta);

    // TODO Check death 
    
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

    if(movement == "") this.spriteX = 0; // Idle state

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

  collisionWithEnemies(enemies, delta) {
    //console.log("Vida " + this.life);
    //console.log("Imnunity " + this.inmunity);
    // Fine tuning collision box size for more realistic collisions
    let tuning = 10; // pixels;
    
    enemies.forEach(enemy => {  
      if(this.posX < enemy.posX + (enemy.size - tuning) && this.posX + (this.size - tuning) > enemy.posX &&
        this.posY < enemy.posY + (enemy.size - tuning) && this.posY + (this.size - tuning) > enemy.posY) {
          // There is collision
          if(this.inmunity <= 0) {
            this.life -= enemy.power;
            this.inmunity = 3; // three seconds of inmunity after enemy touch
          }
      } 
    });
    
    // Reducing inmunity seconds after enemy touch
    if(this.inmunity < 0) {
      this.inmunity = 0;
    } else {
      this.inmunity -= delta;
    }
  }

  draw() {
    // Update weapons
    this.weapons.forEach(weapon => weapon.draw());

    // Draw character
    this.ctx.save();
    if(this.inmunity > 0) this.ctx.globalAlpha = 0.4;
    this.ctx.drawImage(this.character, this.spriteX * this.size, this.spriteY * this.size, 40, 40, this.posX, this.posY, this.size, this.size);
    this.ctx.restore();
  }
}