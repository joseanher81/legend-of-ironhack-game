class EnemyBoss extends Character{

  constructor(ctx, map, imgSrc, posX, posY, player, life = 5, power = 2, speed = 50, size = 80) {
    super(ctx, map, imgSrc, life, posX, posY, speed, size);
    this.power = power;
    this.moveCount = 0;
    this.degrees = 0;
    this.player = player; // This enemy will follow the player
  }

  update(delta) {

    // The enemy will increase its speed for 5 secs every 10 secs
    this.moveCount += delta;
    if(this.moveCount > 10) {
      this.spriteX = 1;
      this.speed = 75;
    }
    if(this.moveCount > 15) {
      this.speed = 50;
      this.spriteX = 0;
      this.moveCount = 0;
    }


    let futureX = this.posX;
    let futureY = this.posY;

    if(this.posX >= this.player.posX && this.posY >= this.player.posY) {
      futureX -= this.speed * delta;
      futureY -= this.speed * delta;
    }

    if(this.posX >= this.player.posX  && this.posY <= this.player.posY) {
      futureX -= this.speed * delta;
      futureY += this.speed * delta;
    }

    if(this.posX <= this.player.posX && this.posY >= this.player.posY) {
      futureX += this.speed * delta;
      futureY -= this.speed * delta;
    }

    if(this.posX <= this.player.posX && this.posY <= this.player.posY) {
      futureX += this.speed * delta;
      futureY += this.speed * delta;
    }

    // Check whether future position is valid
    if(!this.collision(futureX, futureY)) {
      this.posX = futureX;
      this.posY = futureY;
    }

  }

  rotate() {
    this.degrees+=10;
    if(this.degrees > 360) this.degrees = 0;
    let x = this.posX + (this.size/2);
    let y = this.posY + (this.size/2);
    this.ctx.translate(x,y);
    this.ctx.rotate(this.degrees*Math.PI/180);
    this.ctx.translate(-x,-y);
  }

  draw() {
    this.ctx.save();
    if(this.moveCount > 10) this.rotate();
		this.ctx.drawImage(this.character, this.spriteX * this.size, this.spriteY * this.size, this.size, this.size, this.posX, this.posY, this.size, this.size);
    this.ctx.restore();
  }

}