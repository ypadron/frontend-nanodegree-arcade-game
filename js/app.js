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

var Enemy = function(x, y, speed) {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.lateral = 101;


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
    this.x += this.speed * dt;
    if (this.x > 500) {
      this.x = -50;
    }
    //Check for Player/Enemy collision.
    //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    //col * 101, row * 83
    for (let enemy of allEnemies) {

        if (player.y === this.y) {
          console.log("column collision detected!!");
            // alert("I'm hit. Back to Zero!");
            // player.reset();
      }
      console.log(player.y, this.y);
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
    this.startPosX = 200;
    this.startPosY = 395;
    this.x = this.startPosX;
    this.y = this.startPosY;
    // this.resetPlayer =
    this.sprite = "images/char-cat-girl.png";
    this.lateral = 101;
    this.vertical = 83;
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //Check to see if player won/reached the water
    if(this.y < 25) {
      alert("You're Safe!!");
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//This method receives user input via allowedKeys. Moves player around the board.
//x (101) & y (83) movement = to column and row grid dimensions from engine.js
Player.prototype.handleInput = function(direction) {
    switch (direction) {
      case "up":
        if (this.y > -101) {
          this.y -= 83;
      }
      break;
      case "down":
        if (this.y < 395) {
          this.y += 83;
        }
        break;
      case "right":
        if (this.x < 350) {
          this.x += 101;
        }
        break;
      case "left":
        if (this.x > 10) {
          this.x -= 101;
        }
        break;
      }
    }


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
/*
class BugOne extends Enemy {
    constructor(speed = 75, sprite, x, y = 100) {
      super(x, sprite);
      this.y = y;
      this.speed = speed;
    }
}
*/

const bugOne = new Enemy(-50, 63, 100);
const bugFour = new Enemy(-202, 63, 275);
const bugTwo = new Enemy(-50.5, 146, 300);
const bugThree = new Enemy(-50, 229, 200);

/*
class BugTwo extends Enemy {
  constructor(y = 150, speed = 150 ) {
    super(x, sprite);
  }
}
*/
const allEnemies = [];

allEnemies.push(bugOne, bugTwo, bugThree, bugFour);
// allEnemies.push(bugTwo);


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
