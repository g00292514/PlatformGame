 Ball = function (game, x,y,w,h,vx,vy,g) {
    this.game = game;
    this.x =x;
     this.y = y;
     this.width = w;
     this.height = h;
     this.vx = vx;
     this.vy = vy;
     this.g = g;
     this.draw = function () {
        game.ctx.fillRect(this.x, this.y, this.width, this.height);

     };
     this.tick = function () {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.g;
    };

    console.log("ball sanity 4");
};
Ball.prototype.left = function(){
    this.vx -= game.ballSensitivity;
 }
 Ball.prototype.right = function(){
     this.vx += game.ballSensitivity;
 }

