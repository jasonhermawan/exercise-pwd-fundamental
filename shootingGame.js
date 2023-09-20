class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  };

  hit(power) {
    // mengurangi health lawan
    this.health = this.health - power
  };

  useItem(item) { //callback dari getrandomitems
    this.power = this.power + item.power;
    this.health = this.health + item.health
  };

  showStatus() {
    console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
  };
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  };

  getRandomItem() {
    let health = 0;
    let power = 0;
    if (Math.round(Math.random()) === 1) {
      health = 10
    } else {
      health = 0
    }
    if (Math.round(Math.random()) === 1) {
      power = 10
    } else {
      power = 0
    }
    return {health, power}
  };

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      console.log("Player 1's turn: ");
      this.player1.showStatus();
      this.player2.showStatus();
      this.player1.useItem(item1);
      this.player2.useItem(item2);
      this.player2.hit(this.player1.power);
      this.player1.showStatus();
      this.player2.showStatus();
      if (this.player2.health <= 0) {
        console.log(`${this.player1.name} win`);
        break;
      }
      // player 2 turn
      const item3 = this.getRandomItem();
      const item4 = this.getRandomItem();
      console.log("Player 2's turn: ");
      this.player1.showStatus();
      this.player2.showStatus();
      this.player1.useItem(item3);
      this.player2.useItem(item4);
      this.player1.hit(this.player2.power);
      this.player1.showStatus();
      this.player2.showStatus();
      if (this.player1.health <= 0) {
        console.log(`${this.player2.name} win`);
        break;
      }
    };
  };
};

let playerA = new Player("Edo");
let playerB = new Player("Andrew");
let shooting = new ShootingGame(playerA, playerB);
console.log(shooting.start());