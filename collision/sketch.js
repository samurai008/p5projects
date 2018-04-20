
var collision = false;
var bubbles = [];

function setup() {
    createCanvas(600, 360);
    noLoop();
    for (var i=0; i < 20; i++) {
        bubbles[i] = new Bubble(random(600), random(360), 20, i);
    }
}

function draw() {
    background(255);
    
    for (var i=0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].display();
        for (var j=i+1; j < bubbles.length; j++) {
            if (bubbles[i].intersects(bubbles[j])) {
                bubbles[i].changeColor();
                bubbles[j].changeColor();
            }
        }
    }
    

    // if (b1.intersects(b2)) {
    //     b1.changeColor();
    //     b2.changeColor();
    // }
}

function Bubble(x, y, r, val) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.val = val;

    this.display = () => {
        ellipse(this.x, this.y, this.r*2)
    }

    this.update = () => {
        this.x = this.x + random(1,-1);
    }

    this.intersects = (obj) => {
        var d = CalcDist(this.x, this.y, obj.x, obj.y);
        if (d < this.r + obj.r) {
            return true;
        }
        return false;
    }

    this.changeColor = () => {
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, this.r*2);
        fill(0);
        text(this.val, this.x, this.y);
    }
}

function CalcDist(x1, y1, x2, y2) {
    return Math.pow(Math.pow((x1-x2), 2) - Math.pow((y1-y2), 2), 0.5);
}