class Weapon {
  static weaponTypes = {'orange': {power: 1, duration: 2, cadence: 1, src: "./img/fireWeaponOrange.png", srcInv: "./img/orangeRect.png"}, 
                        'blue': {power: 2, duration: 3, cadence: 0.5, src: "./img/fireWeaponBlue.png", srcInv: "./img/blueRect.png"},
                        'purple': {power: 3, duration: 4, cadence: 0.3, src: "./img/fireWeaponPurple.png", srcInv: "./img/purpleRect.png"}
                      };

  constructor(ctx, map, type, posX, posY, facing = "down", speed = 150, size = 40) {
    this.ctx = ctx;
    this.map = map;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.size = size;
    this.spriteX = 0;
    this.spriteY = 0;
    this.spriteRefresh = 0;
    this.power = type.power;
    this.weapon = new Image();
    this.weapon.src = type.src;
    this.duration = type.duration; // seconds
    this.rotationDegrees = 0;
    this.audioCtr = new AudioController();

    // The weapon face the same direction as the character
    switch(facing) {
      case 0:
        this.facing = "down";
        break;  
      case 1:
        this.facing = "left";
        break;
      case 2:
        this.facing = "right";
        break;
      case 3:
        this.facing = "up";
        break;
    }
  }

  update(delta, enemies) {
    console.log("This power " + this.power);
    switch(this.facing) {
      case "left":
        this.posX -= this.speed * delta;
        this.rotationDegrees = 90;
        //this.spriteY = 1; // Look to the left
        break;
      case "right":
        this.posX += this.speed * delta;
        this.rotationDegrees = 270;
        //this.spriteY = 2;  // Look to the right
        break;
      case "down":
        this.posY += this.speed * delta;
        this.rotationDegrees = 0;
        //this.spriteY = 0;  // Look down
        break;
      case "up":
        this.posY -= this.speed * delta;
        this.rotationDegrees = 180;
        //this.spriteY = 3;  // Look up
        break;      
    }

     // Sprite animation (with reset)  TODO probably I can do this better
     this.spriteRefresh++;
     if(this.spriteRefresh == 5) {
       this.spriteRefresh = 0;
       this.spriteX++;
       if(this.spriteX > 3) this.spriteX = 0;
     }

     // Check collision with enemies
     let collision = false;
     let tuning = 10; // pixels;
     enemies.forEach((enemy, i, enemyArray) => {
      if(this.posX < enemy.posX + (enemy.size - tuning) && this.posX + (this.size - tuning) > enemy.posX &&
        this.posY < enemy.posY + (enemy.size - tuning) && this.posY + (this.size - tuning) > enemy.posY) {
        // There is collision
        this.audioCtr.playEnemyHit(); 
        enemyArray[i].life -= this.power; // enemy takes the same damage as the weapon power
        if(enemyArray[i].life <= 0) enemyArray.splice(i,1);  // if the enemy is dead after the attack it is erased 
        collision = true; // Do I need this? haha
      } 
     });

     // Decrease duration
     this.duration -= delta;
     
     return (this.duration < 0 || collision) ? true : false;
  }

  draw() {
    this.ctx.save();
    this.rotateCanvas();  // rotate weapon sprite depending on direction
    if(this.duration < 0.5) this.ctx.globalAlpha = 0.4;// some fadeout
    if(this.duration < 0.25) this.ctx.globalAlpha = 0.2;// some fadeout
    this.ctx.drawImage(this.weapon, this.spriteX * this.size, this.spriteY * this.size, 40, 40, this.posX, this.posY, this.size, this.size);
    this.ctx.restore();
  }

  rotateCanvas() {
    this.ctx.translate(this.posX + this.size / 2, this.posY + this.size / 2);
    this.ctx.rotate((Math.PI / 180) * this.rotationDegrees);
    this.ctx.translate(-(this.posX + this.size / 2), -(this.posY + this.size / 2));
  }
}
