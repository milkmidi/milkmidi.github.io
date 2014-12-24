var lib = {};
function init() {
	var canvas = document.getElementById("canvas");
	var stage = new createjs.Stage(canvas);

	stage.addEventListener("stagemousedown",function(e){
		scene3D.nextLayout();
	})
	

 	var scene3D = new lib.Scene3D( stage );
 	scene3D.setStageSize(960,700);
 	stage.addChild( scene3D );		
	
	var tf = new createjs.Text("Click Me", "20px Arial", "#000000");	
	tf.x = 10;
	tf.y = 10;
	stage.addChild( tf );
	
 	for (var i = 0 ; i< 40 ; i++){
 		var color = Math.floor( Math.random() * 0xffffff ); 		
		var graphics = new createjs.Graphics().beginFill( "#"+color.toString(16)).drawRect(0, 0, 50, 50);
 		var shape = new createjs.Shape(graphics);
 		shape.x = i * 60;
 		shape.regX = 25;
 		shape.regY = 25;
 		shape.xpos = 0;
 		shape.ypos = 0;
 		shape.zpos = 0;
 		shape.xsto = 0;
		shape.ysto = 0; 		
 		shape.cache(0,0,50,50);
 		scene3D.addChild( shape );
 	};


 	scene3D.gridLayout();
	
	stage.update();
	createjs.Ticker.setFPS(30);	
	createjs.Ticker.addEventListener("tick", stage);	
}


(function(lib,cjs){

var Tween = cjs.Tween;


(lib.Scene3D = function( pStage ) {
	var _this = this;	
	var stage = pStage;
	var stageWidth;	
	var stageHeight;
	var stageWidth2;
	var stageHeight2;
	

	this.initialize();
	var visibleLength = -600;
	var focalLengh = 600;
	this.camera = {
		x:0,
		y:0,
		z:0,
		hRotation:0,
		vRotation:0
	};

	var layoutIndex = 0;
	var layoutArr = [
		"waveLayout","ballLayout","gridLayout","circleLayout"
	];
	this.nextLayout = function(){
		layoutIndex++;
		layoutIndex %= layoutArr.length;
		this[layoutArr[layoutIndex]]();
	}

	this.waveLayout = function(){
		console.log( "waveLayout" );
		var length = this.children.length;
		var anglePer = Math.PI / 4;
		var RADIUS = 100;
		for( var i=0; i< length ; i++){
			var child = this.children[i];
			var radian = i * anglePer;
			var tx = i * 30 - RADIUS;
			var ty = Math.cos( radian ) * RADIUS;
			var tz = Math.sin( radian ) * RADIUS;
			child.visible = true;
			Tween.get(child).wait(i*20).to(
				{
					xpos	:tx,
					ypos	:ty,
					zpos	:tz,
					xsto	:0,
					ysto	:0					
				},
				300,
				cjs.Ease.circOut)
				;
		}
	}

	this.ballLayout = function(){
		console.log( "ballLayout" );
		var length = this.children.length;
		var anglePer = Math.PI * 2 / length;
		var RADIUS = 100;
		for( var i=0; i< length ; i++){
			var child = this.children[i];
			//var radian = i * anglePer;
			var ax = Math.random() * Math.PI;
			var ay = Math.random() * Math.PI * 2;
			var tx = RADIUS * Math.sin(ax) * Math.cos(ay);
			var ty = RADIUS * Math.sin(ax) * Math.sin(ay);
			var tz = RADIUS * Math.cos(ax);			
			child.visible = true;
			Tween.get(child).wait(i*20).to(
				{
					xpos	:tx,
					ypos	:ty,
					zpos	:tz,
					xsto	:0,
					ysto	:0					
				},
				300,
				cjs.Ease.circOut)
				;
		}
	}

	this.gridLayout = function(){
		console.log( "gridLayout" );
		var length = this.children.length;
		var COUNT = 10;
		var GAP = 80;
		var OFFSET_X = (GAP * COUNT) / 2;
		var OFFSET_Y = (GAP * Math.floor(length / COUNT)) / 2;
		for( var i=0; i< length ; i++){
			var child = this.children[i];
			var tx = (i % COUNT) * GAP - OFFSET_X;
			var tz = 0;
			var ty = Math.floor(i / COUNT) * GAP - OFFSET_Y;
			child.visible = true;
			Tween.get(child).wait(i*20).to(
				{
					xpos	:tx,
					ypos	:ty,
					zpos	:tz,
					xsto	:0,
					ysto	:0					
				},
				300,
				cjs.Ease.circOut)
				;
		}
	}
	this.circleLayout= function(){
		console.log( "circleLayout" );
		var length = this.children.length;
		var anglePer = Math.PI * 2 / length;
		for( var i=0; i< length ; i++){
			var child = this.children[i];
			var radian = i * anglePer;
			var tx = Math.sin( radian ) * 350;
			var tz = Math.cos( radian ) * 350;
			var ty = 0;			
			child.visible = true;
			Tween.get(child).wait(i*20).to(
				{
					xpos	:tx,
					ypos	:ty,
					zpos	:tz,
					xsto	:0,
					ysto	:0					
				},
				300,
				cjs.Ease.circOut)
				;
		}
	}
	this.setStageSize = function( pW, pH){
		stageWidth = pW;
		stageWidth2 = pW *0.5;
		stageHeight = pH;
		stageHeight2 = pH *0.5;
	}

	function softChild( child1 , child2){
		return child1.sortIndex > child2.sortIndex;
	}

	this.onTick = function(){
		//console.log( stage.mouseX)
		var camera = this.camera;
		var ht = ( stage.mouseX - stageWidth2) * .00005 ;
		var vt = ( stage.mouseY - stageHeight2) * .001  ;
		//hr +=(ht - hr) / 10;
		camera.hRotation += ht;
		camera.vRotation += (vt - camera.vRotation) / 50;

		
		var _rx = camera.hRotation;
		var _sinRX = Math.sin(_rx);
		var _cosRX = Math.cos(_rx);
		var _ry = camera.vRotation;	
		var _sinRY = Math.sin(_ry);
		var _cosRY = Math.cos(_ry);
		var length = this.children.length;
		for( var i=0; i< length ; i++){
			var child = this.children[i];
			var _x0 = child.xpos - camera.x;
            var _y0 = child.ypos - camera.y;
            var _z0 = child.zpos - camera.z;            
			
			var _tx;
			var _ty;
			var _tz;

			// rotation around y axis	
			_tx = _cosRX * _x0 - _sinRX * _z0;
            _tz = _cosRX * _z0 + _sinRX * _x0;			
            _x0 = _tx;
            _z0 = _tz;
			
			
			// rotation around x axis           
			_ty = _cosRY * _y0 - _sinRY * _z0;
            _tz = _cosRY * _z0 + _sinRY * _y0;			
            _y0 = _ty;
            _z0 = _tz;

            if (_z0 > visibleLength) {
                if (!child.visible)  child.visible = true;                
                var ratio = focalLengh / (focalLengh + _z0);
                child.x = _x0 * ratio + stageWidth2;
                child.y = _y0 * ratio + stageHeight2;
                child.scaleX = ratio - child.xsto;
                child.scaleY = ratio - child.ysto;
                //child.sortIndex = Math.floor(-_z0);               
                child.sortIndex = ratio; 
                //child.alpha = child.scaleX - 0.5;                
            } else{
            	child.visible = false;
        	}
		}
		
		this.sortChildren( softChild );
		

	}


}).prototype = new cjs.Container();

})(lib,createjs)

