window.onload = init;
var canvas;
var ctx;
var movers = [];
var spaceship;

function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth-50;
  canvas.height = window.innerHeight-50;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = randomColor();
  ctx = canvas.getContext('2d');

  createSpaceship();
  loadMovers(2);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.translate(canvas.width/2-spaceship.loc.x, canvas.height/2-spaceship.loc.y);
  for(var i=0; i<movers.length; i++){
    movers[i].update();
  }
  spaceship.update();

}

function loadMovers(numMovers){
  for(var i=0; i<numMovers; i++){

        var x = Math.random() * window.innerWidth + 1;
        var y = Math.random() * window.innerHeight + 1;
        var radius = Math.random() * 30 + 15;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;

        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        var acc = new JSVector(0,0);


        ctx.strokeStyle = randomColor();
        ctx.fillStyle = randomColor();
        movers.push(new Mover(loc, vel, acc, radius, randomColor()));
  }
}

function randomColor(){
  var r = Math.random() * 255|0;
  var g = Math.random() * 255|0;
  var b = Math.random() * 255|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//setInterval(loadMover, 6000);

function createSpaceship(){
  var x = canvas.width/2;
  var y = canvas.height/2;
  var radius = 100;
  var loc = new JSVector(x,y);
  spaceship = new Spaceship(loc, radius, 'blue');
}
