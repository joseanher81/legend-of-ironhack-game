class Item {
  static itemTypes = {'bluePotion': {type: "potion", value: "blue", imgSrc: "./img/bluePotion.png", size: 30},
                      'purplePotion': {type: "potion", value: "purple", imgSrc: "./img/purplePotion.png", size: 30},
                      'cupLife': {type: "life", value: 2, imgSrc:"./img/cup.png", size: 30}
                    }

  constructor(posX, posY, item) {
    this.posX = posX;
    this.posY = posY;
    this.type = item.type;
    this.value = item.value;
    this.item = new Image();
    this.item.src = item.imgSrc;
    this.size = item.size;
  }

  draw(ctx) {
    ctx.drawImage(this.item, this.posX, this.posY, this.size, this.size);
  }
}