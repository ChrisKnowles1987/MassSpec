class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.mass = 100
        this.charge = 1
        this.colour = this.determineColour(this.charge)

    }
    determineColour(charge) {
        let coloursList = ['red', 'yellow', 'green']
        this.colour = coloursList[this.charge]
        return this.colour

    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.mass / 50, 0, Math.PI * 2);
        ctx.fillStyle = (this.colour);
        ctx.fill();
        ctx.closePath();
    }
    move() {
        this.x = this.x + 1
        this.y = this.y
    }
}


for (i=0; i<100; i++) {
    particles.push(new Particle(100,100))
}


particles = [
    new Particle(100, 100),
    new Particle(100, 100),
    new Particle(100, 100)
]
window.requestAnimationFrame(draw);
function draw() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(40,40,40)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particle.move();
    particle.draw();


    window.requestAnimationFrame(draw);
}
