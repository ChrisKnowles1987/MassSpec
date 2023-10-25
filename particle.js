class Particle {
    constructor(x, y,mass, charge) {
        this.x = x
        this.y = y
        this.mass = mass
        this.charge = charge
        this.colour = this.determineColour(this.charge)
        this.Xvelocity = 10
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
        
        
        if(this.x >canvas.width/2){
        this.Xvelocity-=  this.mass /500
        if(this.Xvelocity <= 0){
            this.Xvelocity = 0
        }
        this.Yvelocity+= 0.1+ this.Yvelocity * this.mass / this.charge /1000}
        
        
        

        if(this.y > canvas.height ){
            // this.x =100
            this.y = 0
            // this.Xvelocity = 10
            this.Yvelocity = 0.0
        }

        

    }
}



