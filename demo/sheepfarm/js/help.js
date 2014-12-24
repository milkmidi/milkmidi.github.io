
(function (lib, img, cjs) {

(lib.Help = function() {
	this.initialize();


	var _this = this;

	var help1 = new cjs.Bitmap(img.help_1);
	this.addChild( help1 );

	var next = new cjs.Bitmap(img.help_next);
	next.x = 778;
	next.y = 538;
	this.addChild( next );
	next.addEventListener("click", function () {	
		var help2 = new cjs.Bitmap(img.help_2);
		_this.addChild( help2 );

		var close = new cjs.Bitmap(img.help_close);
		close.x = 778;
		close.y = 538;
		_this.addChild( close );
		close.addEventListener("click", function(){
			_this.parent.removeChild( _this );
		});
	});


}).prototype = p = new cjs.Container();



})(lib = lib||{}, images = images||{}, createjs = createjs||{});


