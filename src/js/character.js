class Character {

  constructor(ctx, imgSrc, posX = 100, posY = 100, speed = 10) {
    this.ctx = ctx;
    this.imgSrc = imgSrc;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
  }

  update() {

  }

  draw() {
    console.log("Draws hero");
  }
}