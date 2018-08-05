// Enemies our player must avoid
/*
class Enemy {
  constructor(x = 50, y = 50, speed = 25, sprite = "images/enemy-bug.png") {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = sprite;
  }
}
*/

var Enemy = function() {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 50;
    this.y = 50;
    this.speed = 25;


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 3;
    if (this.x > 500) {
      this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
    this.x = 200;
    this.y = 400;
    this.sprite = "images/char-cat-girl.png";
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//This method receives user input via allowedKeys. Moves player around the board.
Player.prototype.handleInput = function(direction) {
    switch (direction) {
      case "up":
        if (this.y > 0) {
          this.y -= 95;
      }
      break;
      case "down":
        if (this.y < 400) {
          this.y += 95;
        }
        break;
      case "right":
        if (this.x < 350) {
          this.x += 95;
        }
        break;
      case "left":
        if (this.x > 10) {
          this.x -= 95;
        }
        break;
      }
    }


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
/*
class BugOne extends Enemy {
    constructor(speed = 75, sprite, x = 50, y = 100) {
      super(sprite);
      this.x = x;
      this.y = y;
      this.speed = speed;
    }
}
*/
const bugOne = new Enemy();

const allEnemies = [];

allEnemies.push(bugOne);

const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
