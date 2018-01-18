

function Mover(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

Mover.prototype.update = function(){

  // this.loc.add(this.vel);
  // if(this.loc.x >= window.innerWidth || this.loc.x <= 0){
  //    this.vel.x *= -1;
  //   //ball.radius = Math.random() * 100 + 15;
  // }
  // if(this.loc.y >= window.innerHeight || this.loc.y <= 0){
  //    this.vel.y *= -1;
  // }
  // if(repeller.loc.x - this.loc.x <= 30 && repeller.loc.y - this.loc.y <= 30){
  //   this.vel.x.setDirection(this.vel.x*-1);
  //   this.vel.y.setDirection(this.vel.y*-1);
  // }
  // if(attractor.loc.x - this.loc.x <= 30 && attractor.loc.y - this.loc.y <= 30){
  //   this.vel.x.setDirection(attractor.vel.x);
  //   this.vel.y.setDirection(attractor.vel.y);
  // }
  this.render();
//  attractor.render();
//  repeller.render();
}

Mover.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}


//Attractor.prototype.update = function(){
  //  if(this.loc.x >= window.innerWidth || this.loc.x )
//}
