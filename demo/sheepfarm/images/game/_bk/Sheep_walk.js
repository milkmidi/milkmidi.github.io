(function(window) {
walk = function() {
	this.initialize();
}
walk._SpriteSheet = new SpriteSheet({images: ["Sheep_walk.png"], frames: [[3,3,122,111,0,0,0],[128,3,122,111,0,0,0],[253,3,122,111,0,0,-1],[378,3,123,111,0,0,-1],[3,117,123,111,0,0,-2],[129,117,124,110,0,0,-3],[256,117,123,111,0,0,-2],[382,117,123,111,0,0,-1],[3,231,122,111,0,0,-1],[128,231,122,111,0,0,0],[253,231,122,111,0,0,0],[378,231,122,111,0,0,0],[3,345,117,110,0,0,0],[123,345,117,110,0,0,0],[243,345,107,110,0,0,0]]});
var walk_p = walk.prototype = new BitmapAnimation();
walk_p.BitmapAnimation_initialize = walk_p.initialize;
walk_p.initialize = function() {
	this.BitmapAnimation_initialize(walk._SpriteSheet);
	this.paused = false;
}
window.walk = walk;
}(window));

