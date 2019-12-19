class Utils {
  static loadJson(name) {
    return JSON.parse(name);
  }

  static createEnemy(enemy, ctx, map, heroe) {
    switch(enemy.type) {
      case "devil":
        return new EnemyDevil(ctx, map, enemy.imgSrc, enemy.life, enemy.posX, enemy.posY, enemy.power, enemy.speed, enemy.size);
      case "boss":
        return new EnemyBoss(ctx, map, enemy.imgSrc, enemy.posX, enemy.posY, heroe, enemy.life, enemy.power, enemy.speed, enemy.size);  
    }
  }
}