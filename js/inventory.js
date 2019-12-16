class Inventory {

  constructor(ctx, x = 0, y = 0, width = 920, height = 120) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.logo = new Image();
    this.logo.src = "./img/leyend.png";
    this.hearts = new Image();
    this.hearts.src = "./img/hearts.png";
    this.weapon = new Image();
    this.weapon.src = Weapon.weaponTypes['orange'].srcInv;
  }

  draw(heroLife, srcInv) {
    let heartsY = 144 - (heroLife * 24);
    this.weapon.src = srcInv;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect( this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.logo, 10, 10, 350, 100); 
    this.ctx.drawImage(this.hearts, 0, heartsY, 72, 24, 700, 48, 72, 24);
    this.ctx.drawImage(this.weapon, 550, 28, 65, 65);
  }
}