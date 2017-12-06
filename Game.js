Game = function(canvas){
    var game = this;
    this.framerate=70;
    this.ballSensitivity = .5;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ball = new Ball(game,200,400,10,10,0,0.5,.1);
    this.platforms = new Platforms(game);
    this.actors = [];
    this.actors.push(this.platforms);

    this.keyBinding={
        37: function(){game.ball.left();},
        39: function(){game.ball.right();}

    }
    var platforms;
    start(this);
    var thread = startThread(this);
    console.log("sanity32");

}
Game.prototype.tickAll = function(){

    var len = this.actors.length;
    for(var i = 0; i < len ; i++){
        this.actors[i].tick();
    }
    this.drawAll();
}
Game.prototype.drawAll = function(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    var len = this.actors.length;
    for(var i = 0; i < len ; i++) {
        this.actors[i].draw();
    }
}
Game.prototype.checkCollision = function(p,b){
    return false;
}
Game.prototype.handleKey = function(keyCode){
    this.keyBinding[keyCode]();
}
function start(game){
    game.actors.push(game.ball);
}
function startThread(game){
    return  setInterval(
        function(){
            game.tickAll();
        },
        game.framerate
    );
}
