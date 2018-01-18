document.addEventListener('keydown', keyPressed, false);
document.addEventListener('keyup', keyUp, false);

var up = false;
var left = false;
var down = false;
var right = false;

function keyPressed(event){
  if(event.keyCode == 87){
    up = true;
  }
  if(event.keyCode == 65){
    left = true;
  }
  if(event.keyCode == 83){
    down = true;
  }
  if(event.keyCode == 68){
    right = true;
  }
  console.log(event.keyCode);
}

function keyUp(event){
  if(event.keyCode == 87){
    up = false;
  }
  if(event.keyCode == 65){
    left = false;
  }
  if(event.keyCode == 83){
    down = false;
  }
  if(event.keyCode == 68){
    right = false;
  }
  console.log(event.keyCode);
}
function Spaceship(loc, rad, clr){
  this.loc = loc;
  this.rad = rad;
  this.clr = clr;
}

Spaceship.prototype.update = function(){
  // console.log(this);
  if(up){
    ctx.translate(0,-2);
  }
  if(left){
    ctx.translate(-2,0);
  }
  if(down){
    ctx.translate(0,2);
  }
  if(right){
    ctx.translate(2,0);
  }
  console.log(this.loc.x);
  console.log(this.loc.y);
  this.render();
}

Spaceship.prototype.render = function(){
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, this.rad, Math.PI*2,0,false); //center
  ctx.stroke();
  ctx.fill();
}
