var insideDots = 0
var allDots = 0
var area = 0
var pElement

function setup() {
    createCanvas(500, 500)
    background(115)
    rectMode(RADIUS)
    ellipse(width / 2, height / 2, width, height)

    pElement = createP("dots inside = " + insideDots + "<br>sum of all dots = " + allDots + "<br>area inside circle = " + area/PI + " * pi")
    createA("../index.html", "go back")
}

function draw() {
    var x = random(width)
    var y = random(height)
    strokeWeight(5)
    if ((x - width / 2) * (x - width / 2) + (y - height / 2) * (y - height / 2) < (width/2 * width/2)) {
        stroke(255, 0, 0)
        insideDots++
    } else {
        stroke(0)
    }
    point(x, y)
    allDots++
    area = insideDots / allDots
    pElement.html("dots inside = " + insideDots + "<br>sum of all dots = " + allDots + "<br>area inside circle = " + (area/(PI/4)).toFixed(4) + " * pi")
}
