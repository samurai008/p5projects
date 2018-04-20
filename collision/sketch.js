
// var collision = false;
// var bubbles = [];

// function setup() {
//     createCanvas(600, 360);
//     noLoop();
//     for (var i=0; i < 20; i++) {
//         bubbles[i] = new Bubble(random(600), random(360), 20, i);
//     }
// }

// function draw() {
//     background(255);
    
//     for (var i=0; i < bubbles.length; i++) {
//         bubbles[i].update();
//         bubbles[i].display();
//         for (var j=i+1; j < bubbles.length; j++) {
//             if (bubbles[i].intersects(bubbles[j]) && i!=j) {
//                 bubbles[i].changeColor();
//                 bubbles[j].changeColor();
//                 console.log(bubbles[i],bubbles[j]);
//                 console.log(bubbles[i].intersects(bubbles[j]));
//             }
//         }
//     }
    

//     // if (b1.intersects(b2)) {
//     //     b1.changeColor();
//     //     b2.changeColor();
//     // }
// }

// function Bubble(x, y, r, val) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.val = val;

//     this.display = () => {
//         ellipse(this.x, this.y, this.r*2)
//     }

//     this.update = () => {
//         this.x = this.x + random(1,-1);
//     }

//     this.intersects = (obj) => {
//         var d = CalcDist(this.x, this.y, obj.x, obj.y);
//         if (d < this.r + obj.r) {
//             return true;
//         }
//         return false;
//     }

//     this.changeColor = () => {
//         fill(random(255), random(255), random(255));
//         ellipse(this.x, this.y, this.r*2);
//         text(this.val, this.x, this.y);
//     }
// }

// function CalcDist(x1, y1, x2, y2) {
//     return Math.pow(Math.pow((x1-x2), 2) - Math.pow((y1-y2), 2), 0.5);
// }

// Shiffman's code
let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);

  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }


  }

}

class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
    // if (d < this.r + other.r) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}