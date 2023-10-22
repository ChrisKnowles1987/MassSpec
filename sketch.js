
canvas = document.getElementById('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
//canvas.style.background = 'black'
context = canvas.getContext('2d');



function draw(){
    ion = context.rect(200,200,4,4)
    context.fill();

}
draw()

