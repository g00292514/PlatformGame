function Platform( game, x,y,width,height,vx,vy,g) {
    this.game= game;
    this.x = Math.random()*360;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vx = vx;
    this.vy = vy;
    this.g = g;
}
Platform.prototype.draw = function (){
    game.ctx.fillStyle = "blue";
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
    // createPlatform()
};

Platform.prototype.tick = function () {
    this.y -= this.vy;
    if (game.checkCollision(this, this.game.ball)){
        this.game.ball.vy = Math.abs(ball.vy);
    }
    //console.log(checkCollision(this, ball));
};






