Platforms = function(game){
    this.game = game;
    this.list = [];
    this.list[0] = new Platform(this.game,0,750,40,10,0,-.5,0);
    this.list[1] = new Platform(this.game,0,700,40,10,0,-.5,0);
    this.list[2] = new Platform(this.game,0,680,40,10,0,-.5,0);
    this.list[3] = new Platform(this.game,0,600,40,10,0,-.5,0);
    this.list[4] = new Platform(this.game,0,530,40,10,0,-.5,0);
    this.list[5] = new Platform(this.game,0,400,40,10,0,-.5,0);
    this.list[6] = new Platform(this.game,0,230,40,10,0,-.5,0);
    this.list[7] = new Platform(this.game,0,320,40,10,0,-.5,0);
    this.list[8] = new Platform(this.game,0,420,40,10,0,-.5,0);

}
Platforms.prototype.tick = function(){
    var len = this.list.length;
    for(var i = 0; i<len; i++){
        this.list[i].tick();
    }
}
Platforms.prototype.draw = function () {
    var len = this.list.length;
    for(var i =0; i<len;i++){
        this.list[i].draw();
    }
}
Platforms.prototype.create = function () {
    list.push(new Platform(this.game,0 , 0, 40, 10, 0, -.5, 0))
}


