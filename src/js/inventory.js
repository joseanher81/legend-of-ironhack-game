class Inventory {

  constructor(ctx, x = 0, y = 0, width = 920, height = 120) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect( this.x, this.y, this.width, this.height);
  }
}