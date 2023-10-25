
canvas = document.getElementById('canvas');
canvas.width = 2000

canvas.height = 900
//canvas.style.background = 'black'
ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(40,40,40)';
ctx.fillRect(0,0,canvas.width, canvas.height);

let particles = [];
for (i=0; i<1000; i++) {
    particles.push(new Particle(100,100, 
        Math.random() *200,
        // <0.5? 100: 200 , 
        Math.ceil(Math.random() * 4
        )))
}

window.requestAnimationFrame(draw);
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(40,40,40)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.move();
        particle.draw();
    });


    
    


    window.requestAnimationFrame(draw);
}


