class Item {
  constructor(posX, posY, type, value, imgSrc, size = 30) {
    this.posX = posX;
    this.posY = posY;
    this.type = type;
    this.value = value;
    this.item = new Image();
    this.item.src = imgSrc;
    this.size = size;
  }

  draw(ctx) {
    ctx.drawImage(this.item, this.posX, this.posY, this.size, this.size);
  }
}