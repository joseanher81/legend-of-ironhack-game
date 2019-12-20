class AudioController {

  constructor() {
    this.bckgrMusic = new Audio();
    this.bckgrMusic.src = "./audio/background.ogg";
    this.fireBall = new Audio();
    this.fireBall.src = "./audio/fireBall.wav";
    this.enemyHit = new Audio();
    this.enemyHit.src = "./audio/enemyHit.wav";
    this.damage = new Audio();
    this.damage.src = "./audio/damage.wav";
    this.death = new Audio();
    this.death.src = "./audio/death.wav";
    this.deathPlayed = false;
    this.victory = new Audio();
    this.victory.src = "./audio/victory.wav";
    this.victoryPlayed = false;
    this.item = new Audio();
    this.item.src = "./audio/item.wav";
  }
  
  playBackground() {
    this.bckgrMusic.loop = true;
    this.bckgrMusic.play();
  }
  
  playBackgroundCastle() {
    this.bckgrMusic.src = "./audio/backgroundCastle.ogg";
  }
  
  playFireball() {
    this.fireBall.load();
    this.fireBall.play();
  }
  
  playEnemyHit() {
    this.enemyHit.play();
  }
  
  playDamage() {
    this.damage.play();
  }
  
  playDeath() {
    if(!this.deathPlayed) {
      this.deathPlayed = true;
      this.death.play();
    }   
  }
  
  playVictory() {
    if(!this.victoryPlayed) {
      this.victoryPlayed = true;
      this.victory.play();
    }
  }
  
  playItem() {
    this.item.play();
  }
  
  stopBackground() {
     this.bckgrMusic.pause();
  }

}