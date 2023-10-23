class Particle {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.mass = 100
        this.charge=1
        this.colour = this.determineColour(this.charge)
        
    }
    determineColour(charge){
        let coloursList = ['red','yellow','green']
        this.colour = coloursList[this.charge]
        return this.colour
        
    }
    draw(){
       ctx.beginPath();
       ctx.arc(75,75, this.mass / 50, 0, Math.PI * 2);
       ctx.fillStyle=(this.colour);
       ctx.fill();
       ctx.closePath();
    }
    move(){
        this.x=this.x+1
        this.y=this.y
    }
}
particle = new Particle(100,100)

window.requestAnimationFrame(draw);
function draw(){
    
 
 
 particle.move(this.x,this.y)
 particle.draw();
 console.log(particle);
 console.log(particle.colour)
 window.requestAnimationFrame(draw);
}
 