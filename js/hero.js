class Hero extends Character {

  constructor(ctx, map, imgSrc, life, posX, posY, currentWeapon, speed = 100, size = 40) {
	super(ctx, map, imgSrc, life, posX, posY, speed, size);
    this.inmunity = 0; // in seconds
    this.currentWeapon = (currentWeapon== undefined) ? Weapon.weaponTypes['orange'] : currentWeapon; // basic weapon by default
    this.weapons = [];
    this.lastWeaponSecs = 0; // time passed since the last weapon was throwed
  }

  update(movement, delta, enemies) {
    this.lastWeaponSecs += delta;

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
        // Create new fire ball (if it has passed at least 0.5 seconds since last one)
        if(this.lastWeaponSecs > this.currentWeapon.cadence) {
          this.weapons.push(new Weapon(this.ctx, this.map, this.currentWeapon, this.posX, this.posY, this.spriteY));      
          this.audioCtr.playFireball();
          this.lastWeaponSecs = 0;
        }
        break;
    }

    // Update weapons
    this.weapons.forEach((weapon, i, array) => {
      let erase = weapon.update(delta, enemies);
      if(erase) array.splice(i,1); // delete weapon   
    });

    // Check whether there is collision with enemies (uses the current position)
    this.collisionWithEnemies(enemies, delta);

    // Check whether future position is valid
    if(!this.collision(futureX, futureY)) {
      this.posX = futureX;
      this.posY = futureY;
    }

    // Check items on map
    this.takeItems();

    // Sprite animation (with reset)  TODO probably I can do this better
    this.spriteRefresh++;
    if(this.spriteRefresh == 5) {
      this.spriteRefresh = 0;
      this.spriteX++;
      if(this.spriteX > 2) this.spriteX = 0;
    }

    if(movement == "") this.spriteX = 0; // Idle state

  }

  collisionWithEnemies(enemies, delta) {
    // Fine tuning collision box size for more realistic collisions
    let tuning = 10; // pixels;
    
    enemies.forEach(enemy => {  
      if(this.posX < enemy.posX + (enemy.size - tuning) && this.posX + (this.size - tuning) > enemy.posX &&
        this.posY < enemy.posY + (enemy.size - tuning) && this.posY + (this.size - tuning) > enemy.posY) {
          // There is collision
          if(this.inmunity <= 0) {
            this.audioCtr.playDamage();
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

  takeItems() {
    let tuning = 10; // pixels;
    this.map.items.forEach((item, i, itemArray) =>{
        if(this.posX < item.posX + (item.size - tuning) && this.posX + (this.size - tuning) > item.posX &&
        this.posY < item.posY + (item.size - tuning) && this.posY + (this.size - tuning) > item.posY) {
          // Is 'touching' item so check the type
          this.audioCtr.playItem();
          if(item.type == "potion") {
            this.currentWeapon = Weapon.weaponTypes[item.value];
          }
          if(item.type == "life") {
            this.life += item.value;
            if(this.life > 6) this.life = 6;
          }
          itemArray.splice(i,1); // Delete item
        } 
    });
  }

  draw() { // Override
    // Update weapons
    this.weapons.forEach(weapon => weapon.draw());

    // Draw character
    this.ctx.save();
    if(this.inmunity > 0) this.ctx.globalAlpha = 0.4;
    this.ctx.drawImage(this.character, this.spriteX * this.size, this.spriteY * this.size, 40, 40, this.posX, this.posY, this.size, this.size);
    this.ctx.restore();
  }
}