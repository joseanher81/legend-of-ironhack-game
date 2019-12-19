class EnemyBoss extends Character{

  constructor(ctx, map, imgSrc, posX, posY, player, life = 5, power = 2, speed = 50, size = 40) {
    super(ctx, map, imgSrc, life, posX, posY, speed, size);
    this.power = power;
    this.moveCount = 0;
    this.player = player; // This enemy will follow the player
  }

  update(delta) {

    // The enemy will increase its speed for 5 secs every 10 secs
    this.moveCount += delta;
    if(this.moveCount > 10) {
      this.speed = 75;
    }
    if(this.moveCount > 15) {
      this.speed = 50;
      this.moveCount = 0;
    }


    let futureX = this.posX;
    let futureY = this.posY;

    if(this.posX >= this.player.posX && this.posY >= this.player.posY) {
      console.log("Caso 1")
      futureX -= this.speed * delta;
      futureY -= this.speed * delta;
    }

    if(this.posX >= this.player.posX  && this.posY <= this.player.posY) {
      console.log("Caso 2")
      futureX -= this.speed * delta;
      futureY += this.speed * delta;
    }

    if(this.posX <= this.player.posX && this.posY >= this.player.posY) {
      console.log("Caso 3")
      futureX += this.speed * delta;
      futureY -= this.speed * delta;
    }

    if(this.posX <= this.player.posX && this.posY <= this.player.posY) {
      console.log("Caso 4")
      futureX += this.speed * delta;
      futureY += this.speed * delta;
    }

    // Check whether future position is valid
    if(!this.collision(futureX, futureY)) {
      this.posX = futureX;
      this.posY = futureY;
    }

    //sprite animation

  }

}