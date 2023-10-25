class Particle {
    constructor(x, y,mass, charge) {
        this.x = x
        this.y = y
        this.mass = mass
        this.charge = charge
        this.colour = this.determineColour(this.charge)
        this.Xvelocity = 1
        this.Yvelocity = 0.0
        

    }
    determineColour(charge) {
        let coloursList = ['red', 'yellow', 'white', 'blue']
        this.colour = coloursList[this.charge-1]
        return this.colour

    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1+ (this.mass / 50), 0, Math.PI * 2);
        ctx.fillStyle = (this.colour);
        ctx.fill();
        ctx.closePath();
    }
    move() {
        
        this.x = this.x + this.Xvelocity
        this.y = this.y +this.Yvelocity
        
        

        this.Xvelocity+=0.1 * this.mass /100
        this.Yvelocity+= this.Yvelocity * this.charge /100
        
        
        

        if(this.x > canvas.width ){
            this.x =100
            this.y = 100
            this.Xvelocity = 0.01
            this.Yvelocity = 0.0
        }

        

    }
}



