$(function(){	
	var canvas = document.getElementById("canvas");
	$(window).resize( function(){		
		var windowW = Math.min(600, $(window).width() );
		if (canvas.width != windowW) {
			canvas.width = windowW;
		};		
	});	
	$(window).trigger("resize");
	if($.browser.msie && $.browser.version < 9){
		$('#ie_go_to_hell').show(0);
		$('#canvas_wrap').hide();		
	}
})

var images = [];
var lib = {};
function init() {
	var canvas = document.getElementById("canvas");
	var manifest = [		
		{src:"images/milkmidi_icon.png", id:"milkmidi_icon"}		
	];
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("progress", handleProgress);
	loader.loadManifest(manifest);	

	function handleProgress(event) {    
		//var percentInt = Math.round(event.loaded * 100);	
	}
	function handleFileLoad(evt) {	
		if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
	}
	function handleComplete() {	
		var stage = new createjs.Stage(canvas);
		var game = new lib.Game( stage );
		stage.addChild( game );		
		stage.update();
		createjs.Ticker.setFPS(30);	
	}
}





(function (lib, img, cjs) {
var GRAVITY = 2;
var CANVAS_WIDTH;
var CANVAS_HEIGHT = 360 - 10;
var DECAY = 0.9;
var EXTRA_X;
var EXTRA_Y = 20;
var Tween = cjs.Tween;

(lib.Game = function( pStage ) {
	var _this = this;
	var stage = pStage;
	this.initialize();

	var w = Math.min(600,$(window).width());
	CANVAS_WIDTH = w - 20;
	EXTRA_X = (w - 260)/2;
	

	var resizeSetTimeout = -1;
	$(window).resize( function(){					
		if (resizeSetTimeout != -1) {
           clearTimeout(resizeSetTimeout);
        }
        resizeSetTimeout = setTimeout(invalidate, 500);
	});	
	function invalidate(){
		var windowW = Math.min(600, $(window).width() );		
		CANVAS_WIDTH = windowW - 20;
		EXTRA_X = (windowW - 260)/2;	
		for(var i = 0 ; i < icons.length ; i++){
			var p = icons[i];
			var col = i % SIZE;
			var row = Math.floor( i / SIZE);
			var x = col * 13;
			var y = row * 13;
			p.setPosition( x , y);
		}
		stage.update();					
	}

	var icons = [];
	var isMobile = false;
	var COUNT = isMobile ? 200 : 400;
	var SIZE = isMobile ? 40 : 20;
	for(var i = 0 ; i < COUNT ; i++){
		var col = i % SIZE;
		var row = Math.floor( i / SIZE);
		var x = col * 13;
		var y = row * 13;
		var p = new lib.Particles( images.milkmidi_icon ,x , y );						
		p.name = i +"";
		this.addChild(p);
		icons.push( p );
	}	

	var isListener = false;

	function smash( e ) {
	    //console.log( e );
	    for ( var i = 0 ; i < icons.length ; i++ ) {
	        var p = icons[i];
	        var radius = Math.sqrt( Math.pow( p.x - e.stageX, 2 ) + Math.pow( p.y - e.stageY, 2 ) );
	        if ( radius < 40 ) {
	            if ( p.lock ) {
	                var vx = ( ( Math.random() * 10 ) - 5 ) * 4;
	                var vy = ( ( Math.random() * 10 ) - 5 ) * 4;
	                p.smash( vx, vy );
	            };
	        };
	    }
	    if ( !isListener ) {
	        createjs.Ticker.addEventListener( "tick", pStage );
	        isListener = true;
	    }
	}

	pStage.addEventListener( "stagemousedown", smash );

	for ( var i = 0; i < 3; i++ ) {

	    ( function ( index ) {
	        setTimeout( function () {
	            smash( { stageX: 190 + ( index * 100 ), stageY: 45 + ( index * 100 ) } );
	        }, 500 * index + 1000 );
	    } )( i );	    
	}
	


}).prototype = new cjs.Container();


(lib.Particles = function( id , cX , cY ) {	
	var _this = this;
	this.initialize( id );
	this.vx = 0;
	this.vy = 0;
	this.lock = true;
	this.onFloor = false;
	this.cache( cX , cY , 13 , 13);
	this.regX = cX;
	this.regY = cY;
	
	this.x = cX +EXTRA_X;
	this.y = cY +EXTRA_Y;
	var initX = this.x;
	var initY = this.y;

	function backToOriginalPosition(){		
		Tween.get(_this , {override:true}).to({x:initX,y:initY,alpha:1,rotation:0},300,cjs.Ease.circOut).call( function(){			
			_this.onFloor = false;
			_this.scaleX = _this.scaleY = 1;
			_this.alpha = 1;
		});	
	}
	this.smash = function( pVX , pVY ){
		this.vx = pVX;
		this.vy = pVY;
		this.lock = false;
		this.onFloor = false;
		this.scaleX = 4;
		this.scaleY = 4;
	}
	this.setPosition = function( pX , pY){
		this.x = pX + EXTRA_X;
		this.y = pY + EXTRA_Y;
		initX = this.x;
		initY = this.y;
	}
	

	this.onTick = function(){
		if( this.lock )
			return;
		//this.vx *= DECAY;
		this.x += this.vx;
		this.y += this.vy;

		this.scaleX += (1 - this.scaleX) * 0.15;
		this.scaleY = this.scaleX;

		
		this.alpha = 0.75;
		this.rotation = this.vx*5;


		if (this.onFloor) {
			this.vx *= DECAY;
			
				
			if( Math.abs(this.vx) < 0.5){
				this.lock = true;
				this.rotation = 0;
				setTimeout( backToOriginalPosition,1600);
			}

		}else{
			this.vy += GRAVITY;					
			if( Math.abs(this.vy) < 0.5 && this.y >= CANVAS_HEIGHT-10 ){				
				//this.lock = true;			
				this.onFloor = true;
				this.vy = 0;
				this.y = CANVAS_HEIGHT;
				//console.log("onFloor");				
			}		
		}
		
		if (this.x < 0) {	
			this.vx *= -0.5;
		}else if( this.x > CANVAS_WIDTH){
			this.x = CANVAS_WIDTH;
			this.vx *= -0.5;
		}
		if (this.y > CANVAS_HEIGHT) {		
			this.y = CANVAS_HEIGHT;	
			this.vy *= -0.5;
		};	

	}	
}).prototype = new cjs.Bitmap();



})(lib = lib||{}, images = images||{}, createjs = createjs||{});


